<?php 

$pdo = new PDO('mysql:host=localhost;dbname=note_app', 'root', '', [PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION]);

$stmt = $pdo->prepare('SELECT * FROM `notes`');
$stmt->execute();
var_dump($stmt); 
$results = $stmt->fetchAll();
var_dump($results);