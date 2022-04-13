// import React, from "react";
import axios from "axios";
export default function DisplaySongs({ songs }) {
  const columns = songs[0] && Object.keys(songs[0]);

  const handleDelete = () => {
    // do somehting here

    // let songId = this.state.details.id;
    axios.delete("http://127.0.0.1:8000/api/songs/music/" + "{songs.id}");
  };
  // function getSongId() {
  //   let songId = this.props.match.parans.id;
  //   axios
  //     .get(`http://127.0.0.1:8000/api/songs/music/${songId}`)
  //     .then((response) => {
  //       this.setState({ details: response.data }, () => {
  //         console.log(this.state);
  //       });
  //     });
  // }

  // function onDelete() {
  //   let songId = this.state.details.id;
  //   axios.delete(`http://127.0.0.1:8000/api/songs/music/${songId}`);
  // }

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
            <button type="submit">Delete</button>
            <button>Update</button>
          </tr>
        ))}
      </tbody>
    </table>
  );
  console.log(songs.id);
}
