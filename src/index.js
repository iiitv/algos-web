import React from 'react';
import ReactDOM from 'react-dom';
import { Route } from "react-router";
import { BrowserRouter, Switch } from "react-router-dom";
import { Provider } from 'react-redux';

import store from './store';
// import registerServiceWorker from './registerServiceWorker';

import './index.css';
import HomePage from './components/home/HomePage';
import HomeComponent from './components/welcome/HomeComponent.js'

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <div>

        <Switch>
          {/* New PArrellax component */}
          {/* <Route exact path="/" component={HomePage}></Route> */}
          <Route exact path="/" component={HomeComponent}></Route>
          <Route exact path="/home" component={HomePage}></Route>
        </Switch>

      </div>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
// registerServiceWorker();
