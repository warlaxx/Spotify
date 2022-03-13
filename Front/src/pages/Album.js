import React, { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import Menu from "../Composent/Menu.js";
import { useParams } from "react-router-dom";
import { BsFillPlayFill } from "react-icons/bs";
import Playpause from "../Composent/PlayPause.js";
import { useNavigate } from "react-router-dom";
import Spinner from "react-spinner-material";

const Album = () => {
  const navigate = useNavigate();
  const params = useParams();

  const [artistData, SetartistData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/back/Details_album.php?data=" + params.id)
      .then((res) => res.json())
      .then((result) => {
        SetartistData(result);
      });
  }, []);

  function StartOrStop(audioFile) {
    var audie = document.getElementById("myAudio");
    if (!audie.src || audie.src !== audioFile) audie.src = audioFile;
    if (audie.paused === false) {
      audie.pause();
    } else {
      audie.play();
    }
  }

  function ChangeMusic(data) {
    var stateMusic = document.querySelector("#state_music");
    var musicName = document.querySelector("#curr_music_name");
    var musicImage = document.querySelector("#curr_music_image");
    var musicArtist = document.querySelector("#curr_music_artist");

    musicName.textContent = data.name_tracks;
    musicImage.src = data.cover_album;
    musicImage.style.display = "block";
    musicArtist.textContent = data.name;
    stateMusic.textContent = "En cours de lecture";
  }

  if (artistData.length === 0) {
    return (
      <Grid container spacing={2}>
        <Grid item xs={2}>
          <div>
            <Menu />
          </div>
        </Grid>
        <Grid item xs={10}>
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              height: "100vh",
              selfalign: "center",
              verticalAlign: "middle",
              paddingTop: "25%",
            }}
          >
            <Spinner radius={120} color={"#fff"} stroke={5} visible={true} />
          </div>
        </Grid>
      </Grid>
    );
  }
  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={2}>
          {" "}
          <Menu />
          <div>
            <h3 id="state_music" style={{ color: "gray" }}>
              Choisissez une musique
            </h3>
            <img
              id="curr_music_image"
              alt="Image de l'album en cours d'écoute"
              style={{
                display: "none",
                maxWidth: "100%",
              }}
            />
            <p id="curr_music_name" style={{ color: "white" }}></p>
            <p
              id="curr_music_artist"
              style={{ color: "gray", margin: "0px", paddingBottom: "10px" }}
            ></p>
            <Playpause />
            <audio id="myAudio"></audio>
          </div>
        </Grid>
        <Grid item xs={10} style={{ backgroundColor: "rgb(18,18,18)" }}>
          <div style={{ display: "flex" }}>
            <img
              src={artistData[0]["cover_album"]}
              alt=""
              style={{
                objectFit: "cover",

                width: "100%",
                maxHeight: "40%",
                maxWidth: "40%",
                borderRadius: "10px",
              }}
            />
            <p
              style={{
                fontSize: "60px",
                color: "white",
                fontWeight: "bold",
                marginTop: "20%",
                marginLeft: "6%",
              }}
            >
              {params.id}
              <h6
                style={{ cursor: "pointer", color: "gray", fontSize: "24px" }}
                onClick={() =>
                  navigate("/artiste/" + encodeURI(artistData[0].name))
                }
              >
                {artistData[0].name}
              </h6>
            </p>
          </div>
          <p style={{ color: "gray" }}>{artistData[0]["description_album"]}</p>
          <div>
            {artistData.map((data) => (
              <div
                style={{
                  display: "flex",
                  borderRadius: "5px",
                  cursor: "pointer",
                }}
                className="track"
                onClick={() => {
                  StartOrStop(data.mp3);
                  ChangeMusic(data);
                }}
              >
                <BsFillPlayFill
                  style={{
                    fontSize: "28px",
                    marginTop: "10px",
                    marginLeft: "10px",
                    marginRight: "20px",
                  }}
                />
                <p
                  style={{
                    marginLeft: "10px",
                    marginRight: "20px",
                  }}
                >
                  {data.track_no}
                </p>
                <p>{data.name_tracks}</p>
              </div>
            ))}
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Album;
