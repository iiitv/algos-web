import React, { Component } from 'react';
import logo from '../../static/img/logo.png';
import './HomePage.css';

class HomePage extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to IIITV open source</h1>
        </header>
      </div>
    );
  }
}

export default HomePage;
