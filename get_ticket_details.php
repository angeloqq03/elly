<?php
$servername = "localhost";
$username = "id21472784_ellybe";
$password = "Elly.1234";
$database = "id21472784_ellydb";

if (isset($_GET['id'])) {
    $ticketId = $_GET['id'];
    try {
        $conn = new PDO("mysql:host=$servername;dbname=$database", $username, $password);
        $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

        $stmt = $conn->prepare("SELECT id, username, email, status, created_at FROM payment_tickets WHERE id = :id");
        $stmt->bindParam(':id', $ticketId);
        $stmt->execute();
        $ticket = $stmt->fetch(PDO::FETCH_ASSOC);

        header('Content-Type: application/json');
        echo json_encode($ticket);
    } catch(PDOException $e) {
        error_log("Error: " . $e->getMessage(), 0);
        echo "An error occurred while fetching ticket details.";
    }

    $conn = null;
} else {
    echo "Ticket ID not provided.";
}
?>
