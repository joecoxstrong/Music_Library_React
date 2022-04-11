import React, { useEffect, useState } from "react";
import AddSong from "./Components/AddSong";
import DisplaySongs from "./Components/DisplaySongs";
import axios from "axios";

function App() {
  const [songs, setSongs] = useState([
    {
      title: "",
      artist: "",
      album: "",
      release_date: "",
      genre: "",
      like: "",
    },
  ]);

  useEffect(() => {
    getAllSongs();
  }, []);
  function addNewSong(song) {
    let tempSongs = [song, ...songs];

    setSongs(tempSongs);
  }

  async function getAllSongs() {
    let response = await axios.get("http://127.0.0.1:8000/api/songs/music/");
    setSongs(response.data);
  }

  // const [songs, setSongs] = useState([

  // ]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const result = await fetch("http://127.0.0.1:8000/api/songs/music/");
  //     const jsonResult = await result.json();

  //     setSongs(jsonResult);
  //   };

  //   fetchData();
  // }, []);

  // const submitSong = async () => {

  // }
  return (
    <div>
      <AddSong addNewSongProperty={addNewSong} />
      <DisplaySongs parentSongs={songs} />
      {/* <div>
        <h1>Music Library</h1>
        {songs.map((songs) => (
          <div key={songs.id}>
            <h2>{songs.title}</h2>
            <h3>{songs.artist}</h3>
            <h3>{songs.album}</h3>
            <h3>{songs.release_date}</h3>
            <h3>{songs.genre}</h3>
          </div>
        ))}
      </div> */}
    </div>
  );
}

export default App;
