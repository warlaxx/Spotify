<?php
require_once "db.php";
require_once "core.php";
$rq=$_GET["data"];



// request 5 Albums
function Home_albums($dbh,$rq)
{
    
    $test2 = 0+25*$rq;
    
    // echo $test;
    // echo $test2;
    $stmt = $dbh->query("SELECT albums.name as 'name_album',albums.cover as 'cover_album', albums.cover_small as 'cover_small_album',artists.name FROM albums  
    INNER JOIN artists ON albums.artist_id = artists.id LIMIT 25 OFFSET $test2 ;");
    $stmt->setFetchMode(PDO::FETCH_ASSOC);
    $Global_array = [];
    while ($row = $stmt->fetch()) {
        array_push($Global_array, $row);
    }
    echo json_encode($Global_array);
}

Home_albums($dbh,$rq);