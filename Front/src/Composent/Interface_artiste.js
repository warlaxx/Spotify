import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../Styles/style.css";
import Spinner from 'react-spinner-material';

const Interface_artiste = (props) => {
  const navigate = useNavigate();

  const [isOver2, setIsOver2] = useState(false);

  const [artistData, SetartistData] = useState([]);
  //   console.log("tqt", artistData);
  useEffect(() => {
    fetch("http://localhost:3000/back/Home_artists.php")
      .then((res) => res.json())
      .then((result) => {
        // console.log(result[0].name);
        SetartistData(result);
      });
  }, []);

  if (artistData.length === 0) {
    return (
      <div
      style={{ width: "100%", display: "flex", justifyContent: "center", height: "50%", selfalign: "center",verticalAlign: "middle", paddingBottom:"80px",paddingTop:"80px"}}
    >
     <Spinner radius={120} color={"#fff"} stroke={5} visible={true} />
    </div>
    );
  }

  return (
    <div style={{ display: "flex", flexWrap: "wrap", flexGrow: "5" }}>
      {artistData.map((data, i) => (
        <div
          style={{
            borderRadius: "15px",
            width: "20%",
            textAlign: "center",
            paddingTop: "1%",
            paddingBottom: "2.5%",
            cursor: "pointer",
          }}
          className="artiste"
          onMouseEnter={() => setIsOver2(true)}
          onMouseLeave={() => setIsOver2(false)}
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
            Artiste
          </p>
        </div>
      ))}
    </div>
  );
};

export default Interface_artiste;
