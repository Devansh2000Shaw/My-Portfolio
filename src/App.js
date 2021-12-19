import React, {useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import CircleLoader from "react-spinners/CircleLoader";
import Preloader from './components/Preloader';

function App() {
  const {loading, setLoading} = useState(false);

  useEffect( () => {
    setLoading(true);
    setTimeout( () => {
      setLoading(false);
    }, 8000 );
  }, []);
  return (
    <div className="App">
      {
        loading ? (
          // <CircleLoader size = {30} color = {'#24caac'} loading = {loading}/>
          <Preloader/>
        )
        :
      <header className="App-header">
        <Preloader/>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      }
    </div>
  );
}

export default App;
