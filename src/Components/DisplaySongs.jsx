import React from "react";

export default function DisplaySongs({ songs }) {
  const columns = songs[0] && Object.keys(songs[0]);

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
          </tr>
        ))}
      </tbody>
    </table>
  );
}
