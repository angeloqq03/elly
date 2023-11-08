<?php
$servername = "localhost";
$username = "id21472784_ellybe";
$password = "Makemehappy.03";
$database = "id21472784_ellydb";

try {
    $conn = new PDO("mysql:host=$servername;dbname=$database", $username, $password);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    $stmt = $conn->prepare("SELECT id, username, email, status, created_at FROM payment_tickets WHERE status = 'open'");
    $stmt->execute();
    $tickets = $stmt->fetchAll(PDO::FETCH_ASSOC);

    header('Content-Type: application/json');
    echo json_encode($tickets);
} catch(PDOException $e) {
    error_log("Error: " . $e->getMessage(), 0);
    echo "An error occurred while fetching tickets.";
}

$conn = null;
?>
