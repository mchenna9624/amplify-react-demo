import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import LoginControl from './clock';
import LoginComponent from './LoginComponent';
import AuthComponent from './AuthComponent';

import * as serviceWorker from './serviceWorker';

import Amplify, { Auth } from 'aws-amplify';
import config from './aws-exports';
Amplify.configure(config)

ReactDOM.render(
  <React.StrictMode>
    <AuthComponent/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
