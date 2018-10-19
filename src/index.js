import React from 'react';
import ReactDOM from 'react-dom';
import { Route } from "react-router";
import { BrowserRouter } from "react-router-dom";
import './index.css';
import HomePage from './components/home/HomePage';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <BrowserRouter basename={process.env.PUBLIC_URL}>
    <div>
      <Route exact path="/" component={App}></Route>
      <Route path="/home" component={HomePage}></Route>
    </div>
  </BrowserRouter>,
  document.getElementById('root')
);
registerServiceWorker();
