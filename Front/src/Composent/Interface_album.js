import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import imgAlbum from "../imgAlbum.jpg";
import Spinner from 'react-spinner-material';
import Mix1 from '../Images/Mix1.jpeg';
import Mix2 from '../Images/Mix2.jpeg';
import Mix3 from '../Images/Mix3.jpeg';
import Mix4 from '../Images/Mix4.jpeg';
import Mix5 from '../Images/Mix5.jpeg';

const Interface_album = () => {
  const navigate = useNavigate();
  const [isOver, setIsOver] = useState(false);

  const [album, setAlbum] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/back/Home_albums.php")
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        setAlbum(result);
      });
  }, []);

  if (album.length === 0) {
    return (
      <div
            style={{ width: "100%", display: "flex", justifyContent: "center", height: "50%", selfalign: "center",verticalAlign: "middle", paddingBottom:"80px",paddingTop:"80px"}}
          >
           <Spinner radius={120} color={"#fff"} stroke={5} visible={true} />
          </div>
    );
  }

  return (
    <div style={{ display: "flex" }}>
      {album.map((data, i) => (
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

    
  );
};

export default Interface_album;

