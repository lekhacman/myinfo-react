import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as serviceWorker from './serviceWorker';
import Root from './component/Root';
import configStore from './redux/create';
import Api from './client/api.client';
import axios from 'axios';
import { createBrowserHistory } from 'history';
import config from './config';

// Bootstrap
/**
 * API
 * @type {{myApi: apiClient, redirect: function}}
 */
const api = {
  myApi: Api(axios, config),
  redirect: link => {
    window.location = link;
  },
};
const history = createBrowserHistory();
const store = configStore(history, api, undefined);

// Hooray
ReactDOM.render(
  <Root history={history} store={store} />,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
