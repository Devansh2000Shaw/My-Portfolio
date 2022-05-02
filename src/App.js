import React, {useState, useEffect } from 'react';
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
          <CircleLoader size = {30} color = {'#24caac'} loading = {loading}/>
          // <Preloader/>
        )
        :
      <header className="App-header">
        <Preloader/>
      </header>
      }
    </div>
  );
}

export default App;
