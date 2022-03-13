<?php
require_once "db.php";
require_once "core.php";
$name_artists = ($_GET["data"]);

// page detail artists
function Detail_artists($dbh,$name_artists)
{
    $stmt = $dbh->query("SELECT albums.name as 'name_album',albums.cover as 'cover_album', albums.cover_small as 'cover_small_album', albums.release_date,artists.name , artists.description , artists.bio , artists.photo 
    FROM albums INNER JOIN artists ON albums.artist_id = artists.id WHERE artists.name  = '$name_artists'");

    $stmt->setFetchMode(PDO::FETCH_ASSOC);
    $Global_array = [];
    while ($row = $stmt->fetch()) {
        array_push($Global_array, $row);
    }
    echo json_encode($Global_array);   
}

Detail_artists($dbh,$name_artists);