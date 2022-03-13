<?php

require_once "db.php";
require_once "core.php";

$SearchData = $_GET['data'];

// request Searchbar by name album or music name or name of the singer
function Searchbar($dbh, $SearchData)
{
    $stmt = $dbh->query("SELECT distinct albums.name as 'name_album', albums.description as 'description_album',albums.cover as 'cover_album', albums.cover_small as 'cover_small_album', albums.release_date,albums.popularity , genres.name AS 'genre',artists.name , artists.description , artists.bio , artists.photo,tracks.name AS 'name_tracks',tracks.track_no,tracks.duration,tracks.mp3 FROM albums  
INNER JOIN artists ON albums.artist_id = artists.id
INNER JOIN genres_albums ON genres_albums.album_id = albums.id
INNER JOIN  genres ON genres.id = genres_albums.genre_id 
INNER JOIN tracks ON tracks.album_id = albums.id WHERE albums.name like'%$SearchData%' or artists.name like '%$SearchData%' or tracks.name LIKE '%$SearchData%' GROUP BY albums.name,artists.name;");

    $stmt->setFetchMode(PDO::FETCH_ASSOC);

    $Global_array = [];
    while ($row = $stmt->fetch()) {
        array_push($Global_array, $row);
    }

    echo json_encode($Global_array);
}

Searchbar($dbh, $SearchData);