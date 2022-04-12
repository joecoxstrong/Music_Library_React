// import React, from "react";
import axios from "axios";
export default function DisplaySongs({ songs }) {
  const columns = songs[0] && Object.keys(songs[0]);

  const handleDelete = () => {
    // do somehting here
    deleteSong();
    async function deleteSong() {
      let response = await axios.delete(
        "http://127.0.0.1:8000/api/songs/music/"
      );
    }
  };

  return (
    <table cellPadding={5} cellSpacing={5}>
      <thead>
        <tr>{songs[0] && columns.map((heading) => <th>{heading}</th>)}</tr>
      </thead>
      <tbody>
        {songs.map((row) => (
          <tr>
            {columns.map((column) => (
              <td>{row[column]}</td>
            ))}
            <button onClick={handleDelete()}>Delete</button>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
