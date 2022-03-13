import React, { useState, useEffect } from "react";
import Menu from "../Composent/Menu.js";
import { Grid } from "@mui/material";
import imgAlbum from "../imgAlbum.jpg";
import Playpause from "../Composent/PlayPause.js";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import Spinner from 'react-spinner-material';

const Artiste_All = () => {
  const navigate = useNavigate();
  const [album, setAlbum] = useState([]);
  const params = useParams();
  const elements = [];
if (params.id<5) {
  for (let index = 0; index <=10; index++) {
    elements.push(index);
    
  }
}
else if (params.id>60){
  for (let index = 54; index <=64; index++) {
    elements.push(index);
    
  }

}else {

  for (let index = parseInt(params.id)-5; index <=parseInt(params.id)+5; index++) {
  console.log(index);
    elements.push(index);
  }
}

  useEffect(() => {
    fetch("http://localhost:3000/back/artists_All.php?data="+params.id)
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        setAlbum(result);
      });
  }, []);

  if (album.length === 0) {
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
          <div>
            <Menu />
           
          </div>
        </Grid>
        <Grid item xs={10}>
        <div style={{ display: "flex" , justifyContent: "center" ,textAlign: "center" }}>
          {elements.map((value, index) => {
        return <li style={{ cursor: "pointer", listStyle :"none" , margin: "5px" }} onClick = {() =>{navigate("/artistall/"+encodeURI(value))
        window.location.reload(true);
    }} key ={index}>{value}</li>
      })}
      </div>
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
                  navigate("/artiste/" + encodeURI(data.name));
                }}
              >
                <img
                  src={data.photo}
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
                         <div style={{ display: "flex" , justifyContent: "center" ,textAlign: "center" ,width: "100%" }}>
          {elements.map((value, index) => {
        return <li style={{ cursor: "pointer", listStyle :"none" , margin: "5px" }} onClick = {() =>{navigate("/artistall/"+encodeURI(value))
        window.location.reload(true);
    }} key ={index}>{value}</li>
      })}
            
          </div>

          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Artiste_All;
