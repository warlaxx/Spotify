
<?php

require_once "db.php";
require_once "core.php";

// request 5 Artists
function DailyMix($dbh)
{
    $stmt = $dbh->query("SELECT tracks.id,tracks.name, tracks.duration, tracks.mp3 FROM tracks WHERE tracks.id ORDER BY RAND() LIMIT 0,15;");

    $stmt->setFetchMode(PDO::FETCH_ASSOC);

    $Global_array = [];
    while ($row = $stmt->fetch()) {
        array_push($Global_array, $row);
    }

    echo json_encode($Global_array);
}

DailyMix($dbh);
