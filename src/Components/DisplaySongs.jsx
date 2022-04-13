import React from "react";

export default function DisplaySongs({ songs }) {
  const columns = songs[0] && Object.keys(songs[0]);

  const handleDelete = async (songs) => {
    // do somehting here
    const response = await fetch(
      `http://127.0.0.1:8000/api/songs/music/${songs.id}/`,
      {
        method: "DELETE",
      }
    );
    const data = await response.json();
    console.log(data);
  };

  return (
    <div key={songs.id}>
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
              <button>UPDATE</button>
              <button onClick={() => handleDelete(songs.id)}>DELETE</button>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
