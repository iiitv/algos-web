import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import Main from './Main';

// import * as serviceWorker from './serviceWorker';
import store from './store';
import './index.css';

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Main />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
// serviceWorker.register();
