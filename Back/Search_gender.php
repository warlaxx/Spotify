<?php

require_once "db.php";
require_once "core.php";
$GenderChoice = $_GET['data'];
// request 5 Artists
function Search_gender($dbh, $GenderChoice)
{

    $stmt = $dbh->query("SELECT albums.name as 'name_album', albums.description as 'description_album',albums.cover as 'cover_album', albums.cover_small as 'cover_small_album', albums.release_date,albums.popularity , genres.name AS 'genre' 
    FROM albums INNER JOIN genres_albums ON genres_albums.album_id = albums.id INNER JOIN genres ON genres.id = genres_albums.genre_id WHERE genres.name = '$GenderChoice';");

    $stmt->setFetchMode(PDO::FETCH_ASSOC);

    $Global_array = [];
    while ($row = $stmt->fetch()) {
        array_push($Global_array, $row);
    }

    echo json_encode($Global_array);
}

Search_gender($dbh, $GenderChoice);