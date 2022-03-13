import React, { useState, useEffect } from "react";
import { Grid } from "@mui/material";
import Menu from "../Composent/Menu";
import { useParams } from "react-router";
import Spinner from "react-spinner-material";
import { useNavigate } from "react-router-dom";
import Playpause from "../Composent/PlayPause.js";
import { BsFillPlayFill } from "react-icons/bs";

const SearchBar = () => {
  const navigate = useNavigate();
  const [album, setAlbum] = useState([]);
  const [artiste, setArtiste] = useState([]);
  const [music, setMusic] = useState([]);

  const params = useParams();
  const elements = [];

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

  useEffect(() => {
    fetch("http://localhost:3000/back/Searchbar.php?data=" + params.id)
      .then((res) => res.json())
      .then((result) => {
        setAlbum(result);
        setArtiste(result);
        setMusic(result);
      });
  });

  const arrayArtiste = {};
  arrayArtiste.arr = new Array();

  for (let index = 0; index < artiste.length; index++) {
    let data = {};
    data["name"] = artiste[index].name;
    data["img"] = artiste[index].photo;
    arrayArtiste.arr.push(data);
  }

  const uniqueArray = arrayArtiste.arr.filter((value, index) => {
    const _value = JSON.stringify(value);
    return (
      index ===
      arrayArtiste.arr.findIndex((arrayArtiste) => {
        return JSON.stringify(arrayArtiste) === _value;
      })
    );
  });

  if (album.length === 0) {
    return (
      <Grid container spacing={2}>
        <Grid item xs={2}>
          <div>
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
          <div>
            <Menu />
          </div>
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
        <Grid item xs={10}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              textAlign: "center",
            }}
          >
            {elements.map((value, index) => {
              return (
                <li
                  style={{
                    cursor: "pointer",
                    listStyle: "none",
                    margin: "5px",
                  }}
                  onClick={() => {
                    navigate("/albumall/" + encodeURI(value));
                    window.location.reload(true);
                  }}
                  key={index}
                >
                  {value}
                </li>
              );
            })}
          </div>
          {/* </Grid> */}
          <p style={{ color: "gray", fontSize: "35px", fontWeight: "bold" }}>
            Résultat des Musiques
          </p>
          <Grid item xs={10} style={{ backgroundColor: "rgb(18,18,18)" }}>
            <div>
              {music.map((data) => (
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
          <p style={{ color: "gray", fontSize: "35px", fontWeight: "bold" }}>
            Résultat des Album
          </p>
          <Grid item xs={10}>
            <div style={{ display: "flex", flexWrap: "wrap", flexGrow: "5" }}>
              {album.map((data, i) => (
                <div
                  style={{
                    borderRadius: "15px",
                    width: "20%",
                    textAlign: "center",
                    paddingTop: "1%",
                    paddingBottom: "2.5%",
                    cursor: "pointer",
                  }}
                  className="album"
                  onClick={() => {
                    navigate("/album/" + encodeURI(data.name_album));
                  }}
                >
                  <img
                    src={data.cover_small_album}
                    style={{
                      height: "11em",
                      maxWidth: "100%",
                      maxHeight: "100%",
                    }}
                  />

                  <p
                    style={{
                      fontSize: "20px",
                      fontWeight: "bold",
                      color: "white",
                      margin: "5px",
                    }}
                  >
                    {data.name_album}
                  </p>
                  <p style={{ fontSize: "15px", color: "gray", margin: "0px" }}>
                    {data.name}
                  </p>
                </div>
              ))}
            </div>
          </Grid>
          <p style={{ color: "gray", fontSize: "35px", fontWeight: "bold" }}>
            Résultat des Artistes
          </p>
          <Grid item xs={10}>
            <div style={{ display: "flex", flexWrap: "wrap", flexGrow: "5" }}>
              {uniqueArray.map((data, i) => (
                <div
                  style={{
                    borderRadius: "15px",
                    width: "20%",
                    textAlign: "center",
                    paddingTop: "1%",
                    paddingBottom: "2.5%",
                    cursor: "pointer",
                  }}
                  className="album"
                  onClick={() => {
                    navigate("/artiste/" + encodeURI(data.name));
                  }}
                >
                  <img
                    src={data.img}
                    style={{
                      width: "200px",
                      height: "200px",
                      objectFit: "cover",
                      borderRadius: "100%",
                      maxWidth: "100%",
                      maxHeight: "100%",
                    }}
                  />

                  <p
                    style={{
                      fontSize: "20px",
                      fontWeight: "bold",
                      color: "white",
                      margin: "5px",
                    }}
                  >
                    {data.name}
                  </p>
                  <p style={{ fontSize: "15px", color: "gray", margin: "0px" }}>
                    {data.name}
                  </p>
                </div>
              ))}
            </div>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default SearchBar;
