import React, { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from './components/home/HomePage';
import HomeComponent from './components/welcome/HomeComponent.js';
import HashLoader from 'react-spinners/HashLoader';
import './Main.css';
import Algorithm from './components/algorithm/Algorithm';


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
          <HashLoader color={'white'} loading={loading} size={60} />
        </div>
      ) : (
        <Switch>
          {/* New PArrellax component */}
          {/* <Route exact path="/" component={HomePage}></Route> */}
          <Route exact path="/" component={HomeComponent}></Route>
          <Route className="homepage" exact path="/home" component={HomePage}></Route>
          <Route path="/algorithm/:name" component={Algorithm} />
        </Switch>
      )}
    </div>
  );
}

export default App;
