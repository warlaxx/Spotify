import React, { useState, useEffect } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const [search_acc, setsearch] = useState("");
  console.log("search->", search_acc);
  const navigate = useNavigate();
  // async function search_account() {
  //   console.log("search_account");
  //   await fetch("http://localhost:3000/Back/Searchbar.php", {
  //     method: "POST",
  //     headers: new Headers({
  //       "Content-Type": "application/x-www-form-urlencoded",
  //     }),
  //     body:
  //       "data=" +
  //       JSON.stringify({
  //         search: search_acc,
  //       }),
  //   }).then((res) => console.log(res));
  // }

  const [cherche, SetCherche] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/back/Searchbar.php")
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        SetCherche(result);
      });
  }, []);

  // if (cherche.length === 0) {
  //   return (
  //     <div>
  //       <h1 style={{ color: "white" }}>Chargement</h1>
  //     </div>
  //   );
  // }

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      console.log("enter press here! ");
      // search_account();
      navigate(search_acc);
    }
  };
  return (
    <div
      style={{
        display: "flex",
        backgroundColor: "white",
        width: "fit-content",
        padding: "12px",
        paddingRight: "20px",
        borderRadius: "50px",
      }}
    >
      <AiOutlineSearch
        style={{ fill: "gray", fontSize: "25px", marginTop: "3px" }}
      />
      <input
        type="text"
        placeholder="Artistes, Titres ou Albums"
        style={{
          fontSize: "20px",
          textAlign: "center",
          outline: "none",
          border: "hidden",
          color: "black",
        }}
        onChange={(e) => setsearch(e.target.value)}
        value={search_acc}
        onKeyPress={handleKeyPress}
      />
    </div>
  );
};

export default SearchBar;
