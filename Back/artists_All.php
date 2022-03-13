<?php

require_once "db.php";
require_once "core.php";
$rq=$_GET["data"];



// request 5 Artists
function Home_artists($dbh)
{
    global $rq;
    $test2 = 0+25*$rq;

    $stmt = $dbh->query("SELECT artists.name , artists.photo FROM artists LIMIT 25 OFFSET $test2 ; ");

    $stmt->setFetchMode(PDO::FETCH_ASSOC);



    $Global_array = [];
    while ($row = $stmt->fetch()) {
        array_push($Global_array, $row);
    }

    echo json_encode($Global_array);
}

Home_artists($dbh);