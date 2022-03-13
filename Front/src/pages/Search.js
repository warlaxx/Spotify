import React from "react";
import { Grid } from "@mui/material";
import Menu from "../Composent/Menu.js";
import SearchBar from "../Composent/SearchBar.js";
import Spinner from "react-spinner-material";
import SearchGender from "../Composent/SearchGender.js";

const Search = () => {
  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={2}>
          {" "}
          <Menu />
        </Grid>
        <Grid item xs={10} style={{ backgroundColor: "rgb(18,18,18)" }}>
          <SearchBar />
          <div>
            <SearchGender />
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Search;
