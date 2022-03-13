import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const SearchGender = () => {
  const [search, setsearch] = useState("");
  const navigate = useNavigate();

  const [affichage, setAffichage] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/back/Search_gender.php")
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        setAffichage(result);
      });
  }, []);

  return (
    <div>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          flexGrow: "4",
          paddingTop: "20px",
          cursor: "pointer",
        }}
      >
        <div
          style={{
            display: "flex",
            width: "fit-content",
            padding: "12px",
            paddingRight: "20px",
            paddingLeft: "20px",
            borderRadius: "20px",
          }}
          className="gender"
          onClick={() => {
            navigate("/Search/Classical");
          }}
        >
          <p style={{ color: "white" }}>Classical</p>
        </div>
        <div
          style={{
            display: "flex",
            width: "fit-content",
            padding: "12px",
            paddingRight: "20px",
            paddingLeft: "20px",
            borderRadius: "20px",
          }}
          className="gender"
          onClick={() => {
            navigate("/Search/New%20Age");
          }}
        >
          <p style={{ color: "white" }}>New Age</p>
        </div>
        <div
          style={{
            display: "flex",
            width: "fit-content",
            padding: "12px",
            paddingRight: "20px",
            paddingLeft: "20px",
            borderRadius: "20px",
          }}
          className="gender"
          onClick={() => {
            navigate("/Search/Electronical");
          }}
        >
          <p style={{ color: "white" }}>Electronical</p>
        </div>
        <div
          style={{
            display: "flex",
            width: "fit-content",
            padding: "12px",
            paddingRight: "20px",
            paddingLeft: "20px",
            borderRadius: "20px",
          }}
          className="gender"
          onClick={() => {
            navigate("/Search/World");
          }}
        >
          <p style={{ color: "white" }}>World</p>
        </div>
        <div
          style={{
            display: "flex",
            width: "fit-content",
            padding: "12px",
            paddingRight: "20px",
            paddingLeft: "20px",
            borderRadius: "20px",
          }}
          className="gender"
          onClick={() => {
            navigate("/Search/Ambient");
          }}
        >
          <p style={{ color: "white" }}>Ambient</p>
        </div>
        <div
          style={{
            display: "flex",
            width: "fit-content",
            padding: "12px",
            paddingRight: "20px",
            paddingLeft: "20px",
            borderRadius: "20px",
          }}
          className="gender"
          onClick={() => {
            navigate("/Search/Jazz");
          }}
        >
          <p style={{ color: "white" }}>Jazz</p>
        </div>
        <div
          style={{
            display: "flex",
            width: "fit-content",
            padding: "12px",
            paddingRight: "20px",
            paddingLeft: "20px",
            borderRadius: "20px",
          }}
          className="gender"
          onClick={() => {
            navigate("/Search/Hip%20Hop");
          }}
        >
          <p style={{ color: "white" }}>Hip Hop</p>
        </div>
        <div
          style={{
            display: "flex",
            width: "fit-content",
            padding: "12px",
            paddingRight: "20px",
            paddingLeft: "20px",
            borderRadius: "20px",
          }}
          className="gender"
          onClick={() => {
            navigate("/Search/Alt%20Rock");
          }}
        >
          <p style={{ color: "white" }}>Alt Rock</p>
        </div>
        <div
          style={{
            display: "flex",
            width: "fit-content",
            padding: "12px",
            paddingRight: "20px",
            paddingLeft: "20px",
            borderRadius: "20px",
          }}
          className="gender"
          onClick={() => {
            navigate("/Search/Electro%20Rock");
          }}
        >
          <p style={{ color: "white" }}>Electro Rock</p>
        </div>
        <div
          style={{
            display: "flex",
            width: "fit-content",
            padding: "12px",
            paddingRight: "20px",
            paddingLeft: "20px",
            borderRadius: "20px",
          }}
          className="gender"
          onClick={() => {
            navigate("/Search/Hard%20Rock");
          }}
        >
          <p style={{ color: "white" }}>Hard Rock</p>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          flexGrow: "4",
          paddingTop: "20px",
          cursor: "pointer",
        }}
      ></div>
    </div>
  );
};

export default SearchGender;
