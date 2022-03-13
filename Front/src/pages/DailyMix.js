import React, { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import Menu from "../Composent/Menu.js";
import { useParams } from "react-router-dom";
import { BsFillPlayFill } from "react-icons/bs";
import imgAlbum from "../imgAlbum.jpg";
import Playpause from "../Composent/PlayPause.js";
import { useNavigate } from "react-router-dom";
import Spinner from "react-spinner-material";
import Mix1 from '../Images/Mix1.jpeg';
import Mix2 from '../Images/Mix2.jpeg';
import Mix3 from '../Images/Mix3.jpeg';
import Mix4 from '../Images/Mix4.jpeg';
import Mix5 from '../Images/Mix5.jpeg';

const DailyMix = () => {
  const navigate = useNavigate();
  const params = useParams();

  const [play, setPlay] = useState(new Audio());
  const [isPlaying, setIsPlaying] = useState(false);
  const [DailyMixData, SetDailyMixData] = useState([]);
const img = [Mix1,Mix2,Mix3,Mix4,Mix5]
    
  useEffect(() => {
    fetch("http://localhost:3000/back/DailyMix.php?data=" + params.id)
      .then((res) => res.json())
      .then((result) => {
        console.log(result[0].name);
        SetDailyMixData(result);
        console.log(DailyMixData);
      });
  }, []);

  function StartOrStop(audioFile) {
    var audie = document.getElementById("myAudio");
    if (!audie.src || audie.src !== audioFile) audie.src = audioFile;
    console.log(audie.paused);
    if (audie.paused == false) {
      console.log("pause");
      audie.pause();
    } else {
      console.log("play");
      audie.play();
    }
  }

  function ChangeMusic(data) {
    var stateMusic = document.querySelector("#state_music");
    var musicName = document.querySelector("#curr_music_name");
    var musicImage = document.querySelector("#curr_music_image");
    var musicArtist = document.querySelector("#curr_music_artist");

    musicName.textContent = data.name_tracks;
    musicImage.src = img[params.id];
    musicImage.style.display = "block";
    musicArtist.textContent = data.name;
    stateMusic.textContent = "En cours de lecture";
  }
  if (DailyMixData.length == 0) {
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
              src={img[params.id]}
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
              {"Mix " +params.id}
            
            </p>
          </div>
          <p style={{ color: "gray" }}>{DailyMixData[0]["description_album"]}</p>
          <div>
            {DailyMixData.map((data) => (
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
                <p>{data.name}</p>
              </div>
            ))}
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default DailyMix;