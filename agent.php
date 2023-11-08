<?php
session_start();

$servername = "localhost";
$username = "id21472784_agents";
$password = "Makemehappy.03";
$database = "id21472784_agents";

try {
    $conn = new PDO("mysql:host=$servername;dbname=$database", $username, $password);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    $username = filter_var($_POST['username'], FILTER_SANITIZE_STRING);
    $fullname = filter_var($_POST['fullname'], FILTER_SANITIZE_STRING);
    $email = filter_var($_POST['email'], FILTER_SANITIZE_EMAIL);
    $phone = filter_var($_POST['phone'], FILTER_SANITIZE_STRING);

    
    $targetDir = "uploads/";

    
    function uploadFile($file, $targetDir) {
        $targetFile = $targetDir . basename($file["name"]);
        move_uploaded_file($file["tmp_name"], $targetFile);
        return $targetFile;
    }

   
    $image1 = uploadFile($_FILES["image1"], $targetDir);
    $image2 = uploadFile($_FILES["image2"], $targetDir);
    $image3 = uploadFile($_FILES["image3"], $targetDir);

    
    if ($_POST['csrf_token'] === $_SESSION['csrf_token']) {
        
        $stmt = $conn->prepare("INSERT INTO agent_tickets (username, fullname, email, phone, image1, image2, image3) VALUES (:username, :fullname, :email, :phone, :image1, :image2, :image3)");
        $stmt->bindParam(':username', $username);
        $stmt->bindParam(':fullname', $fullname);
        $stmt->bindParam(':email', $email);
        $stmt->bindParam(':phone', $phone);
        $stmt->bindParam(':image1', $image1);
        $stmt->bindParam(':image2', $image2);
        $stmt->bindParam(':image3', $image3);
        $stmt->execute();

        echo "New record inserted successfully";
    } else {
        echo "CSRF token validation failed. Please try again.";
    }
} catch(PDOException $e) {
    error_log("Error: " . $e->getMessage(), 0);
    echo "An error occurred. Please try again later.";
}


$conn = null;
?>