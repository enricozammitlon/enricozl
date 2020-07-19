import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import ReactGA from 'react-ga';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const trackingId = 'UA-116690956-1';
ReactGA.initialize(trackingId);

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
);
serviceWorker.register();
