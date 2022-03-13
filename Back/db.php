<?php

/* Connexion à une base MySQL avec l'invocation de pilote */
$dsn = 'mysql:dbname=my_spotify_db;host=65.108.127.22';
$user = 'spotify';
$password = '7552JLq4xwnJYi1D';

try {
    $dbh = new PDO($dsn, $user, $password);
} catch (Exception $e) {
    die('Erreur : ' . $e->getMessage());
}