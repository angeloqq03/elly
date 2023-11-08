<?php
session_start();

$servername = "localhost";
$username = "id21472784_ellybe";
$password = "Elly.1234";
$database = "id21472784_ellydb";

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $ticketId = filter_var($_POST['ticket_id'], FILTER_VALIDATE_INT);
    $reply = filter_var($_POST['reply'], FILTER_SANITIZE_STRING);

    try {
        $conn = new PDO("mysql:host=$servername;dbname=$database", $username, $password);
        $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

        // Retrieve ticket details from the database
        $stmt = $conn->prepare("SELECT username, email FROM support_tickets WHERE id = :id");
        $stmt->bindParam(':id', $ticketId, PDO::PARAM_INT);
        $stmt->execute();
        $ticket = $stmt->fetch(PDO::FETCH_ASSOC);

        // Send email reply
        $to = filter_var($ticket['email'], FILTER_SANITIZE_EMAIL);
        $subject = "Re: Support Ticket #$ticketId";
        $message = "Dear {$ticket['username']},\n\n$reply";
        $headers = "From: your_email@example.com"; // Set your email address here

        if (mail($to, $subject, $message, $headers)) {
            // Email sent successfully, update ticket status in the database
            $updateStmt = $conn->prepare("UPDATE support_tickets SET status = 'Replied' WHERE id = :id");
            $updateStmt->bindParam(':id', $ticketId, PDO::PARAM_INT);
            $updateStmt->execute();
            echo "Reply sent successfully.";
        } else {
            echo "Failed to send reply.";
        }
    } catch(PDOException $e) {
        error_log("Error: " . $e->getMessage(), 0);
        echo "An error occurred while processing your request.";
    }

    // Close the database connection
    $conn = null;
} else {
    echo "Invalid request.";
}
?>
