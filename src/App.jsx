import React, { useEffect, useState } from "react";
import AddSong from "./Components/AddSong";
import DisplaySongs from "./Components/DisplaySongs";
import axios from "axios";
import SearchBar from "./Components/SearchBar";

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
    return rows.filter(
      (row) =>
        columns.some(
          (column) =>
            row[column].toString().toLowerCase().indexOf(search.toLowerCase()) >
            -1
        )
      // row.title.toLowerCase().indexOf(search) > -1 ||
      // row.artist.toLowerCase().indexOf(search) > -1 ||
      // row.album.toLowerCase().indexOf(search) > -1 ||
      // row.release_date.toLowerCase().indexOf(search) > -1 ||
      // row.genre.toLowerCase().indexOf(search) > -1
    );
  }

  function addNewSong(song) {
    let tempSongs = [song, ...songs];

    setSongs(tempSongs);
  }

  return (
    <div>
      {/* <SearchBar /> */}
      <div>
        <input
          type="text"
          placeholder="Search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <AddSong addNewSongProperty={addNewSong} />
      <div>
        {/* <DisplaySongs /> */}
        <DisplaySongs songs={searchSongs(songs)} />
      </div>

      {/* <DisplaySongs parentSongs={songs} /> */}
    </div>
  );
}

export default App;
