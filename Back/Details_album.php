<?php
require_once "db.php";
// echo "oui";
require_once "core.php";
$name_album = ($_GET["data"]);
// echo $name_album;
// echo json_encode("oui");


// page detail album
function Detail_album($dbh,$name_album)
{
    $stmt = $dbh->query("SELECT albums.name as 'name_album', albums.description as 'description_album',albums.cover as 'cover_album', albums.cover_small as 'cover_small_album', albums.release_date,albums.popularity ,artists.name,tracks.name AS 'name_tracks',tracks.track_no,tracks.duration,tracks.mp3 FROM albums 
INNER JOIN artists ON albums.artist_id = artists.id 
INNER JOIN tracks ON tracks.album_id = albums.id WHERE albums.name = '$name_album' ;");

    $stmt->setFetchMode(PDO::FETCH_ASSOC);
    $Global_array = [];
    while ($row = $stmt->fetch()) {
        array_push($Global_array, $row);
    }
    echo json_encode($Global_array);   
}

Detail_album($dbh,$name_album);