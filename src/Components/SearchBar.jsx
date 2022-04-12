import React, { useState, useEffect } from "react";
import axios from "axios";
const SearchBar = (props) => {
  const [songs, setSongs] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    getAllSongs();
    async function getAllSongs() {
      let response = await axios.get("http://127.0.0.1:8000/api/songs/music/");
      setSongs(response.data);
    }
  }, []);

  function searchSongs(DisplaySongs) {
    return DisplaySongs.filter(
      (songs) => songs.title.toLowerCase().indexOf(search) > -1
    );
  }

  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="Search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div>{/* <Datatable data={data} /> */}</div>
    </div>
  );
};

export default SearchBar;
