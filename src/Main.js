import React, { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from './components/home/HomePage';
import HomeComponent from './components/welcome/HomeComponent.js';
import HashLoader from 'react-spinners/HashLoader';
import './Main.css';

function App() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2410);
  }, []);

  return (
    <div className="App">
      {loading ? (
        <div className="loadd">
          <HashLoader color={'EC0103'} loading={loading} size={60} />
        </div>
      ) : (
        <Switch>
          {/* New PArrellax component */}
          {/* <Route exact path="/" component={HomePage}></Route> */}
          <Route exact path="/" component={HomeComponent}></Route>
          <Route exact path="/home" component={HomePage}></Route>
        </Switch>
      )}
    </div>
  );
}

export default App;
