import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import turntableArm from './assets/turntableArm.png'
import { albums } from './data/sampleData' 
import { AlbumList } from './AlbumList'
import { Player } from './Player'
// App.jsx
const clientId = import.meta.env.VITE_CLIENT_ID;
const clientSecret = import.meta.env.VITE_CLIENT_SECRET;


function App() {
  const [userInput, setUserInput] = useState('');
  const [searchInput, setSearchInput] = useState('');
  const [accessToken, setAccessToken] = useState('');
  const [albums, setAlbums] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  const bg = selectedItem ? `url(${selectedItem.images[0].url})` : 'none';
  console.log("bg: " + bg);
  
  let result = "";
  function handleSubmit(e){
    e.preventDefault();
    //setResults('These are the results for ' + userInput);

    //const selection = albums[userInput];
    //setResults(<AlbumCard name={selection.name} artist={selection.artist} year={selection.year} />);
    setSearchInput(userInput);
    //search(userInput);
  }

  useEffect(() => {
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

  }, []);
  
  useEffect(() => {
    //if (!searchInput || !accessToken) return;
    // ensure we have a query and an access token
    if (!searchInput) {
      console.warn('No query provided to search()');
      return ;
    }
    if (!accessToken) {
      console.warn('No access token yet');
      return ;
    }

    search(searchInput);

  }, [searchInput, accessToken]);

  async function search(query) {
    if (!query) return; // <--- this prevents empty search
    if (!accessToken) return;

    // GET THE ARTIST

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
  var artistID = data.artists.items[0].id;

  // console logs para testear
  console.log("Search Input: " + query);
  console.log("Artist ID: " + artistID);

    } catch (error) {
      console.error("Error fetching artists", error);
      return null;
    }


    // GET THE ALBUMS
    try {
      const resp = await fetch("https://api.spotify.com/v1/artists/" + artistID + "/albums", artistParams);
      const data = await resp.json();
      //extract the albums
      if(!data.items){
        console.log("The artist has no albums");
        return null;
      }
      setAlbums(data.items);

      // console logs para testear
      // console.log("Get: " + resp.length);
      // console.log("Albums: " + albums[0].name);
    } catch (error) {
      console.error("Error fetching albums", error);
      return null;      
    }
  }

  /*
  // 2️⃣ useEffect que depende de searchInput
  useEffect(() => {
    // si searchInput está vacío, no hacer nada
    if (!searchInput || !accessToken) return;

    const searchArtist = async () => {
      try {
        const artistParams = {
          method: "GET",
          headers: {
            Authorization: "Bearer " + accessToken,
          },
        };

        const resp = await fetch(
          "https://api.spotify.com/v1/search?q=" + encodeURIComponent(searchInput) + "&type=artist",
          artistParams
        );

        if (!resp.ok) {
          console.error("Spotify API error", resp.status);
          return;
        }

        const data = await resp.json();
        if (!data.artists.items.length) {
          console.log("No artists found");
          return;
        }

        const artistID = data.artists.items[0].id;
        console.log("Search Input:", searchInput);
        console.log("Artist ID:", artistID);
      } catch (err) {
        console.error("Error searching artist:", err);
      }
    };

    searchArtist();
  }, [searchInput, accessToken]); // se ejecuta cada vez que searchInput cambia
  */


  return (
    <section id='container' style={{"--bg-image": bg }}>

        <form onSubmit={handleSubmit}>
          <input class="input" placeholder='Search an artist' type='text' id='search' value={userInput} onChange={(e) => {setUserInput(e.target.value)}}></input>
          <div> {/* for the active press effect*/}
            <button type='submit'>Search</button>
          </div>
        </form>


        <div className="layout">
          {
            albums && albums.length > 0 ? ( // evitar que nada más empezar haga una petición
              <AlbumList albums={albums} onSelectItem={setSelectedItem}/>
            ) : null
          }
          {
        <div className="player">
            <div className="turnTable">
            <img src={turntableArm} alt="Turntable arm" />
            {
              selectedItem != null ? (
                <Player album={selectedItem}/>
              ) : (
                <div className="empty"></div>

              )
            }
          </div>
        </div>
          }
        </div>

    </section>
    
  )
}


export default App
