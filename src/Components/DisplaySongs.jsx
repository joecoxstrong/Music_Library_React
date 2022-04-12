import React from "react";

export default function DisplaySongs({ songs }) {
  const columns = songs[0] && Object.keys(songs[0]);

  return (
    <table cellPadding={0} cellSpacing={0}>
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

// const DisplaySongs = (props) => {
//   return (
//     <div>
//       <h1>Music Library</h1>
//       {props.parentSongs.map((songs) => (
//         <div key={songs.id}>
//           <h2>{songs.title}</h2>
//           <h3>{songs.artist}</h3>
//           <h3>{songs.album}</h3>
//           <h3>{songs.release_date}</h3>
//           <h3>{songs.genre}</h3>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default DisplaySongs;
