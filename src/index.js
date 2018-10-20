import React from 'react';
import ReactDOM from 'react-dom';
import { Route } from "react-router";
import { BrowserRouter, Switch } from "react-router-dom";
import './index.css';
import HomePage from './components/home/HomePage';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <BrowserRouter basename={process.env.PUBLIC_URL}>
    <div>
      <App/>
      <Switch>
        <Route path="/home" component={HomePage}></Route>
      </Switch>
    </div>
  </BrowserRouter>,
  document.getElementById('root')
);
registerServiceWorker();
