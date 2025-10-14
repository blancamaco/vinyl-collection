import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { albums } from './data/sampleData' 
import { AlbumList } from './AlbumList'
// App.jsx
const clientId = import.meta.env.VITE_CLIENT_ID;
const clientSecret = import.meta.env.VITE_CLIENT_SECRET;


function App() {
  const [userInput, setUserInput] = useState('');
  const [searchInput, setSearchInput] = useState('');
  const [accessToken, setAccessToken] = useState('');
  
  let result = "";
  function handleSubmit(e){
    e.preventDefault();
    //setResults('These are the results for ' + userInput);

    //const selection = albums[userInput];
    //setResults(<AlbumCard name={selection.name} artist={selection.artist} year={selection.year} />);

    setSearchInput(userInput);
    search(userInput);
  }

  useEffect(() => {
    alert('hola');

    //configurar los parámetros de la petición HTTP de autenticación
    let authParams = { 
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body:
        "grant_type=client_credentials&client_id=" +
        clientId +
        "&client_secret=" +
        clientSecret,
    }

      // .then((result) => result.json())
      // .then((data) => {
      //   setAccessToken(data.access_token);
      // })

     async function getToken() {
      try {
        //fetch() función nativa de JavaScript. Envia petición a Spotify para obtener tokens
        const resp = await fetch("https://accounts.spotify.com/api/token", authParams)
        const data = await resp.json();
        setAccessToken(data.access_token);
      } catch (error) {
        console.error('Auth fetch failed', error);
      }
    }
    
    getToken();

  }, []
  )

  async function search(query) {
    let artistParams = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + accessToken,
      },
    };
    
    //const artistID = await fetch("https://api.spotify.com/v1/search?q=" + search + "&type=artist", artistParams);
    try {
      // get artista
      const resp = await fetch("https://api.spotify.com/v1/search?q=" + encodeURIComponent(query) + "&type=artist", artistParams);
      // convertimos a JSON
      const data = await resp.json();
      // verificar que hay resultados
      if(!data.artists || !data.artists.items || !data.artists.items.length){
        console.log("No artists found");
        return null;
      }
      // devuelve el id del primer artista
      const artistID = data.artists.items[0].id;

      // console logs para testear
      console.log("Search Input: " + query);
      console.log("Artist ID: " + artistID);

    } catch (error) {
      console.error("Error fetching artists", error);
      return null;
    }

  }


  return (
    <>
      <form onSubmit={handleSubmit}>
        <input placeholder='Search an artist' type='text' id='search' value={userInput} onChange={(e) => {setUserInput(e.target.value)}}></input>
        <button type='submit'>Search</button>
      </form>
      {/* <AlbumList search={search}/> */}
    </>
  )
}


export default App
