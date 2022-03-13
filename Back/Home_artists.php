<?php

require_once "db.php";
require_once "core.php";

// request 5 Artists
function Home_artists($dbh)
{
    $stmt = $dbh->query("SELECT artists.name , artists.photo FROM artists LIMIT 0,5");

    $stmt->setFetchMode(PDO::FETCH_ASSOC);

    $Global_array = [];
    while ($row = $stmt->fetch()) {
        array_push($Global_array, $row);
    }

    echo json_encode($Global_array);
}

Home_artists($dbh);
