import React, { useEffect, useState } from "react";
import AddSong from "./Components/AddSong";
import DisplaySongs from "./Components/DisplaySongs";
import axios from "axios";
import NavBarTitle from "./Components/NavBar";
import "./Components/App.css";

function App() {
  const [songs, setSongs] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    getAllSongs();
    async function getAllSongs() {
      let response = await axios.get("http://127.0.0.1:8000/api/songs/music/");
      setSongs(response.data);
    }
  }, []);

  function searchSongs(rows) {
    const columns = rows[0] && Object.keys(rows[0]);
    return rows.filter((row) =>
      columns.some(
        (column) =>
          row[column].toString().toLowerCase().indexOf(search.toLowerCase()) >
          -1
      )
    );
  }

  function addNewSong(song) {
    let tempSongs = [song, ...songs];

    setSongs(tempSongs);
  }

  return (
    <div>
      <div className="navbar-background">
        <NavBarTitle />

        <input
          type="text"
          placeholder="Search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div className="music-image">
        <div className="col-md-4"></div>
        <div className="col-md-4">
          <AddSong addNewSongProperty={addNewSong} />
        </div>
        <div className="col-md-4"></div>
      </div>
      <div>
        <DisplaySongs songs={searchSongs(songs)} />
      </div>
    </div>
  );
}

export default App;
