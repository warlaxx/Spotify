import { React, useState, useEffect } from "react";

const Searchbar = () => {
  const [cherche, SetCherche] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/back/Searchbar.php")
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
      });
  }, []);
  return <div></div>;
};

export default Searchbar;
