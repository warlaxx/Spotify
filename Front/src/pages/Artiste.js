import React, {useEffect, useState} from "react";
import { Grid } from "@mui/material";
import Menu from "../Composent/Menu.js";
import imgAlbum from "../imgAlbum.jpg";
import { useParams, useNavigate } from "react-router-dom";
import Playpause from "../Composent/PlayPause.js";
import Spinner from 'react-spinner-material';



const Artiste = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [isOver, setIsOver] = useState(false);

  const [album, setAlbum] = useState([]);
  const [artistData, SetartistData] = useState([]);
  //   console.log("tqt", artistData);
  useEffect(() => {
    console.log("oui");
    fetch("http://localhost:3000/back/Details.artists.php?data="+params.id)
      .then((res) => res.json())
      .then((result) => {
        console.log(result[0]);
        SetartistData(result);
      });
  }, []);
  if (artistData.length == 0){
    return (
      <Grid container spacing={2}>
        <Grid item xs={2}>
          <div>
            <Menu />
           
          </div>
        </Grid>
        <Grid item xs={10}>
        <div
            style={{ width: "100%", display: "flex", justifyContent: "center", height: "100vh", selfalign: "center",verticalAlign: "middle",paddingTop:"25%"}}
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
         
        </Grid>
        <Grid item xs={10} style={{ backgroundColor: "rgb(18,18,18)" }}>
          <div style={{ display: "flex" }}>
            <img
              src={artistData[0].photo}
              alt=""
              style={{
                objectFit: "cover",
                width: "500px",
                height : "500px",
                maxHeight: "55%",
                maxWidth: "45%",
                borderRadius: "100%",
                
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
            </p>
          </div>
         <div style={{ display: "flex" , flexDirection: "column", paddingLeft:"20px",paddingRight:"20px" }}>
         <p style={{ color: "white",   fontSize: "25px",paddingBottom:"40px",paddingTop: "40px"  }}>{artistData[0]["description"]}</p>
          <p style={{ color: "white"}}>{artistData[0]["bio"]}</p>
         </div>
        <div>
        </div>
        <p
          style={{
            color: "white",
            fontSize: "24px",
          }}
          >
          Album
        </p>
        <div style={{ display: "flex", flexWrap: "wrap", flexGrow: "5" }}>
      {artistData.map((data, i) => (
        <div
          style={{
            // backgroundColor: `${isOver ? "rgb(40,40,40)" : "rgb(24,24,24)"}`,
            borderRadius: "15px",
            width: "20%",
            textAlign: "center",
            paddingTop: "1%",
            paddingBottom: "2.5%",
            cursor: "pointer",
          }}
          className="album"
          onMouseEnter={() => setIsOver(true)}
          onMouseLeave={() => setIsOver(false)}
          onClick={() => {
            navigate("/album/"+encodeURI(data.name_album))}}>
          <img
            src={data.cover_small_album}
            style={{ height: "11em", maxWidth: "100%", maxHeight: "100%" }}
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
      </Grid>
    </div>
  );
};

export default Artiste;
