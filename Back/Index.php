<?php header('Access-Control-Allow-Origin: *');

require_once "db.php";
require_once "core.php";
Listing_gender($dbh);


// request get all data
function All_data($dbh)
{
    $stmt = $dbh->query("SELECT albums.name as 'name_album', albums.description as 'description_album',albums.cover as 'cover_album', albums.cover_small as 'cover_small_album', albums.release_date,albums.popularity , genres.name AS 'genre',artists.name , artists.description , artists.bio , artists.photo,tracks.name AS 'name_tracks',tracks.track_no,tracks.duration,tracks.mp3 FROM albums  
INNER JOIN artists ON albums.artist_id = artists.id
INNER JOIN genres_albums ON genres_albums.album_id = albums.id
INNER JOIN  genres ON genres.id = genres_albums.genre_id 
INNER JOIN tracks ON tracks.album_id = albums.id ;");

    $stmt->setFetchMode(PDO::FETCH_ASSOC);
    while ($row = $stmt->fetch()) {
        $json_data = json_encode($row);
        echo $json_data;
    }
}






// request Searchbar by name album or music name or name of the singer
function Searchbar($dbh)
{
    $stmt = $dbh->query("SELECT albums.name as 'name_album', albums.description as 'description_album',albums.cover as 'cover_album', albums.cover_small as 'cover_small_album', albums.release_date,albums.popularity , genres.name AS 'genre',artists.name , artists.description , artists.bio , artists.photo,tracks.name AS 'name_tracks',tracks.track_no,tracks.duration,tracks.mp3 FROM albums  
INNER JOIN artists ON albums.artist_id = artists.id
INNER JOIN genres_albums ON genres_albums.album_id = albums.id
INNER JOIN  genres ON genres.id = genres_albums.genre_id 
INNER JOIN tracks ON tracks.album_id = albums.id WHERE albums.name like'%%' or artists.name like '%%' or tracks.name LIKE '%%' ;");

    $stmt->setFetchMode(PDO::FETCH_ASSOC);
    while ($row = $stmt->fetch()) {
        $json_data = json_encode($row);
        echo $json_data;
    }
}
// page listing gender
function Listing_gender($dbh)
{
    $stmt = $dbh->query("SELECT genres.name FROM genres;");

    $stmt->setFetchMode(PDO::FETCH_ASSOC);
    while ($row = $stmt->fetch()) {
        $json_data = json_encode($row);
        echo $json_data;
    }
}



// page detail album
function Detail_album($dbh)
{
    $stmt = $dbh->query("SELECT albums.name as 'name_album', albums.description as 'description_album',albums.cover as 'cover_album', albums.cover_small as 'cover_small_album', albums.release_date,albums.popularity , genres.name AS 'genre',artists.name , artists.description , artists.bio , artists.photo,tracks.name AS 'name_tracks',tracks.track_no,tracks.duration,tracks.mp3 FROM albums 
INNER JOIN artists ON albums.artist_id = artists.id 
INNER JOIN genres_albums ON genres_albums.album_id = albums.id 
INNER JOIN genres ON genres.id = genres_albums.genre_id 
INNER JOIN tracks ON tracks.album_id = albums.id WHERE albums.name = '' ;");

    $stmt->setFetchMode(PDO::FETCH_ASSOC);
    while ($row = $stmt->fetch()) {
        $json_data = json_encode($row);
        echo $json_data;
    }
}