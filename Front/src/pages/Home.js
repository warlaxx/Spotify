import React, { useState } from "react";
import Menu from "../Composent/Menu.js";
import { Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Interface_album from "../Composent/Interface_album.js";
import Interface_artiste from "../Composent/Interface_artiste.js";
import Interface_DailyMix from "../Composent/Interface_DailyMix.js";




const Home = () => {
  const navigate = useNavigate();
  return (
    <div style={{ backgroundColor: "black", height: "100%" }}>
      {" "}
      <Grid container spacing={2} style={{ height: "100%" }}>
        <Grid item xs={2}>
          <div>
            <Menu />
          </div>
        </Grid>
        <Grid
          item
          xs={10}
          style={{ backgroundColor: "rgb(18,18,18)", height: "100%" }}
        >
          <p
            style={{
              color: "white",
              fontSize: "30px",
              fontWeight: "bold",
              fontFamily: "sans-serif",
            }}
          >
            Bonjour{" "}
          </p>
          <div style={{ display: "flex" }}>
              <p
                style={{
                  color: "white",
                  fontSize: "24px",
                }}
              >
                Daily Mix
              </p>
             
            </div>
          <Interface_DailyMix />
          <div>
            <div style={{ display: "flex" }}>
              <p
                style={{
                  color: "white",
                  fontSize: "24px",
                }}
              >
                Album
              </p>
              <a
                href=""
                style={{
                  color: "gray",
                  marginTop: "30px",
                  marginLeft: "70vw",
                }}
                onClick={() => navigate("/albumall/0")}
              >
                Voir plus
              </a>
            </div>
            <Interface_album />
          </div>

          <div>
            <div style={{ display: "flex" }}>
              <p
                style={{
                  color: "white",
                  fontSize: "24px",
                }}
              >
                Artiste
              </p>
              <a
                href=""
                style={{
                  color: "gray",
                  marginTop: "30px",
                  marginLeft: "70vw",
                }}
                onClick={() => navigate("/artistall/0")}
              >
                Voir plus
              </a>
            </div>
            <Interface_artiste style={{ display: "flex" }} />
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Home;
