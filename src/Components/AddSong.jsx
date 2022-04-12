import React, { Component, useState } from "react";

const AddSong = (props) => {
  const [title, setTitle] = useState("");
  const [artist, setArtist] = useState("");
  const [album, setAlbum] = useState("");
  const [release_date, setRelease_date] = useState("");
  const [genre, setGenre] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    const addNewSong = { title, artist, album, release_date, genre };
    fetch("http://127.0.0.1:8000/api/songs/music/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(addNewSong),
    }).then(() => {
      console.log("New song added");
    });

    let newSong = {
      title: title,
      artist: artist,
      album: album,
      release_date: release_date,
      genre: genre,
    };
    setTitle("");
    setArtist("");
    setAlbum("");
    setRelease_date("");
    setGenre("");
    props.addNewSongProperty(newSong);
  }
  return (
    <form onSubmit={handleSubmit}>
      <div class="row mb-3">
        <div class="col-sm-10">
          <input
            type="title"
            class="form-control"
            placeholder="Song Title"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
          />
        </div>
      </div>
      <div class="row mb-3">
        <div class="col-sm-10">
          <input
            type="artist"
            class="form-control"
            placeholder="Artist"
            value={artist}
            onChange={(event) => setArtist(event.target.value)}
          />
        </div>
      </div>
      <div class="row mb-3">
        <div class="col-sm-10">
          <input
            type="album"
            class="form-control"
            placeholder="Album"
            value={album}
            onChange={(event) => setAlbum(event.target.value)}
          />
        </div>
      </div>
      <div class="row">
        <div class="col-sm-10">
          <input
            type="date"
            class="form-control"
            placeholder="Release Date"
            value={release_date}
            onChange={(event) => setRelease_date(event.target.value)}
          />
        </div>
      </div>

      <div class="row mb-3">
        <div class="col-sm-10">
          <input
            type="genre"
            class="form-control"
            placeholder="Genre"
            value={genre}
            onChange={(event) => setGenre(event.target.value)}
          />
        </div>
      </div>

      <button
        type="submit"
        class="button rounded-button"
        style={{ marginLeft: 258 }}
      >
        Create
      </button>
    </form>
  );
};

export default AddSong;
