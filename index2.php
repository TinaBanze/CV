<?php

$pdo = new PDO('mysql:host=localhost;dbname_note_app', 'root', '', [ PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION
]);

$stmt = $pdo->prepare("SELECT * FROM `notes`");

var_dump($stmt);