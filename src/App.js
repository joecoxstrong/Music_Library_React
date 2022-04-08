import React, { useEffect, useState} from 'react'



function App() {
  const [songs, setSongs] = useState()

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch('http://127.0.0.1:8000/api/songs/music/')
      const jsonResult = await result.json()

      setSongs(jsonResult)
    }

    fetchData()
  }, [])

  const submitSong = async () => {

  }
  return (
    <div>
      <button>Add New Song</button>
     <h3>Songs</h3>
     {songs.map(songs =>
      <div key={songs.id} >
        <h1>{songs.title}</h1>
        <h3>{songs.artist}</h3>
        <h3>{songs.album}</h3>
        <h3>{songs.release_date}</h3>
        <h3>{songs.genre}</h3>
      </div>)}
    </div>  
  );
}

export default App;
