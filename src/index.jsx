import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import ReactGA from 'react-ga';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Firebase, { FirebaseContext } from './components/Firebase';

const trackingId = 'UA-116690956-1';
ReactGA.initialize(trackingId);

ReactDOM.render(
  <Router>
    <FirebaseContext.Provider value={new Firebase()}>
      <App />
    </FirebaseContext.Provider>
  </Router>,
  document.getElementById('root')
);
serviceWorker.register();
