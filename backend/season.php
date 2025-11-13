<?php
header('Content-Type: application/json');
header("Access-Control-Allow-Origin: *");

$host = "assoclxadmin.mysql.db";
$dbname = "assoclxadmin";
$user = "assoclxadmin";
$pass = "AssoCLASH2025";

try {
    $pdo = new PDO("mysql:host=$host;dbname=$dbname;charset=utf8", $user, $pass);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    $stmt = $pdo->query("SELECT id, name, start_date, end_date FROM season ORDER BY start_date DESC");
    $seasons = $stmt->fetchAll(PDO::FETCH_ASSOC);

    echo json_encode($seasons);

} catch (PDOException $e) {
    echo json_encode(["error" => $e->getMessage()]);
}
