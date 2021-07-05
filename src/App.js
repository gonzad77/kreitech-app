import './App.css';
import { useState, useEffect, useContext } from "react";

import { TrackContext } from './providers/TracksService';
import Searcher from './components/Searcher/Searcher';
import Header from './components/Header/Header';
import Container from './components/Container/Container';

const App = () => {

  const { saveToken } = useContext(TrackContext);

  useEffect(() => {
    saveToken()
  }, [])

  const [searchText, setSearchText] = useState("");

  const handleSubmit = (e, text) => {
    e.preventDefault();
    setSearchText(text)
  };

  return (
      <div className="App">
        <Header/>
        <Searcher handleSubmit={handleSubmit}/>
        {
          searchText !== '' ? 
          <Container searchText={searchText}></Container> :
          <h2>What are you waiting for?<br/>Search your favorite songs</h2>
        }
      </div>
  );
}

export default App;
