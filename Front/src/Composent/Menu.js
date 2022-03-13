import React, { useState } from "react";

import { CgHome } from "react-icons/cg";
import { AiOutlineSearch } from "react-icons/ai";

import { GrSpotify } from "react-icons/gr";
import { useNavigate } from "react-router-dom";

const Menu = () => {
  const navigate = useNavigate();
  const [isOver, setIsOver] = useState(false);
  const [isOver1, setIsOver1] = useState(false);
  const [isOver2, setIsOver2] = useState(false);
  console.log(isOver);
  return (
    <div style={{ backgroundColor: "black" }}>
      <div style={{ display: "flex" }}>
        <GrSpotify
          style={{
            color: "white",
            fontSize: "30px",
            marginTop: "20px",
            marginRight: "10px",
          }}
        />
        <h2 style={{ color: "white", fontFamily: "sans-serif" }}>Spotify</h2>
      </div>

      <div
        style={{
          display: "flex",
          cursor: "pointer",
        }}
        onMouseEnter={() => setIsOver(true)}
        onMouseLeave={() => setIsOver(false)}
        onClick={() => navigate("/")}
      >
        <CgHome
          style={{
            color: `${isOver ? "white" : "gray"}`,
            marginTop: "18px",
            marginRight: "10px",
            fontSize: "24px",
          }}
        />
        <h3 style={{ color: `${isOver ? "white" : "gray"}` }}>Accueil</h3>
      </div>
      <div
        style={{ display: "flex", cursor: "pointer" }}
        onMouseEnter={() => setIsOver1(true)}
        onMouseLeave={() => setIsOver1(false)}
        onClick={() => navigate("/Search")}
      >
        <AiOutlineSearch
          style={{
            color: `${isOver1 ? "white" : "gray"}`,
            marginTop: "18px",
            marginRight: "10px",
            fontSize: "24px",
          }}
        />
        <h3 style={{ color: `${isOver1 ? "white" : "gray"}` }}>Recherche</h3>
      </div>
      <div
        style={{ display: "flex", cursor: "pointer" }}
        onMouseEnter={() => setIsOver2(true)}
        onMouseLeave={() => setIsOver2(false)}
      ></div>
    </div>
  );
};

export default Menu;
