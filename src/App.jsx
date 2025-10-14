import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { albums } from './data/sampleData'  
import AlbumCard from './AlbumCard'


function App() {
  const [userInput, setUserInput] = useState('');
  const [results, setResults] = useState([]);
  
  let result = "";
  function handleSubmit(e){
    e.preventDefault();
    //setResults('These are the results for ' + userInput);
    const selection = albums[userInput];
    setResults(<AlbumCard name={selection.name} artist={selection.artist} year={selection.year} />);
  }



  return (
    <>
      <form onSubmit={handleSubmit}>
        <label for='search'> Search an artist</label>
        <input type='text' id='search' value={userInput} onChange={(e) => {setUserInput(e.target.value)}}></input>
        <button type='submit'>Search</button>
      </form>
      {results}
    </>
  )
}


export default App
