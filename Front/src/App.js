import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.js";
import Search from "./pages/Search.js";
import Artiste from "./pages/Artiste.js";
import Album from "./pages/Album.js";
import Albumall from "./pages/albums_All";
import Artisteall from "./pages/artists_All";
import SearchGender from "./pages/SearchGender.js";
import SearchBar from "./pages/SearchBar.js";
import DailyMix from "./pages/DailyMix.js";


import "./Styles/style.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/search/:id" element={<SearchBar />} />
        <Route exact path="/search/:id" element={<SearchGender />} />
        <Route exact path="/search" element={<Search />} />
        <Route exact path="/artiste/:id" element={<Artiste />} />
        <Route path="/album/:id" element={<Album />} />
        <Route path="/albumall/:id" element={<Albumall />} />
        <Route path="/artistall/:id" element={<Artisteall />} />
        <Route path="/DailyMix/:id" element={<DailyMix />} />

        {/* <Route element={<NotFound />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
