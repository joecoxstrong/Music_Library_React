import React, { Fragment } from "react";
import { Table } from "react-bootstrap";

export default function DisplaySongs({ songs }) {
  const columns = songs[0] && Object.keys(songs[0]);

  const handleDelete = (id) => {
    // do somehting here
  };

  return (
    <Fragment>
      <Table cellPadding={5} cellSpacing={5}>
        <thead>
          <tr>{songs[0] && columns.map((heading) => <th>{heading}</th>)}</tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>2</td>
          </tr>
          <h1>Hello</h1>
          {songs.map((song, index) => {
            <tr key={index}>
              <td>1</td>
              <td> {song.title} </td>
              <td> {song.artist} </td>
            </tr>;
            <button onClick={() => handleDelete(song.id)}> Delete </button>;
            {
              console.log("Record: ", song);
            }
          })}
        </tbody>
      </Table>
    </Fragment>

    // {columns.map((column) => (
    //   <td>{song[column]}</td>
    //   ))}{" "}
  );
}
