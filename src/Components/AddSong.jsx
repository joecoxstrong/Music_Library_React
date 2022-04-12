import React, { useState } from "react";

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
        <label for="colFormLabel" class="col-sm-2 col-form-label">
          Song Title
        </label>
        <div class="col-sm-10">
          <input
            type="title"
            class="form-control"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
          />
        </div>
      </div>
      <div class="row mb-3">
        <label for="colFormLabel" class="col-sm-2 col-form-label">
          Artist
        </label>
        <div class="col-sm-10">
          <input
            type="artist"
            class="form-control"
            value={artist}
            onChange={(event) => setArtist(event.target.value)}
          />
        </div>
      </div>
      <div class="row mb-3">
        <label for="colFormLabel" class="col-sm-2 col-form-label">
          Album
        </label>
        <div class="col-sm-10">
          <input
            type="album"
            class="form-control"
            value={album}
            onChange={(event) => setAlbum(event.target.value)}
          />
        </div>
      </div>
      <div class="row">
        <label for="colFormLabel" class="col-sm-2 col-form-label">
          Release Date
        </label>
        <div class="col-sm-10">
          <input
            type="date"
            class="form-control"
            value={release_date}
            onChange={(event) => setRelease_date(event.target.value)}
          />
        </div>
      </div>

      <div class="row mb-3">
        <label for="colFormLabel" class="col-sm-2 col-form-label">
          Genre
        </label>
        <div class="col-sm-10">
          <input
            type="genre"
            class="form-control"
            value={genre}
            onChange={(event) => setGenre(event.target.value)}
          />
        </div>
      </div>

      <button
        type="submit"
        class="button rounded-button"
        style={{ marginLeft: 121 }}
      >
        Create
      </button>
    </form>
  );
};

export default AddSong;
