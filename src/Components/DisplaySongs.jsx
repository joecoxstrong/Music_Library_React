import React, { useState, useEffect } from "react";
import axios from "axios";

const DisplaySongs = (props) => {
  return (
    <div>
      <h1>Music Library</h1>
      {props.parentSongs.map((songs) => (
        <div key={songs.id}>
          <h2>{songs.title}</h2>
          <h3>{songs.artist}</h3>
          <h3>{songs.album}</h3>
          <h3>{songs.release_date}</h3>
          <h3>{songs.genre}</h3>
        </div>
      ))}
    </div>

    // <div>
    //   {props.parentEntries.map((entry) => {
    //     return (
    //       <div>
    //         <h4 class="media-heading">{entry.name}</h4>
    //         <div>{entry.title}</div>
    //         <div>{entry.artist}</div>
    //         <div>{entry.album}</div>
    //         <div>{entry.release_date}</div>
    //         <div>{entry.genre}</div>
    //       </div>
    //     );
    //   })}
    // </div>
  );
};

export default DisplaySongs;
