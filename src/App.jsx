/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react';
import ReactGA from 'react-ga';
import './css/softwareng.css';
import 'font-awesome/css/font-awesome.min.css';

import { withRouter, NavLink, useLocation } from 'react-router-dom';
import Routes from './routes';

function App() {
  const location = useLocation();
  ReactGA.set({ page: location.pathname }); // Update the user's current page
  ReactGA.pageview(location.pathname); // Record a pageview for the given page
  const recordCVView = () => {
    ReactGA.event({
      category: 'CV',
      action: 'Viewed the CV',
    });
  };
  return (
    <div className="noisy">
      <div className="frame">
        <div className="piece output">
          <div className="Menu">
            <p className="menu-line">
              <NavLink to="/">home</NavLink>
              <NavLink to="/blog">blog</NavLink>
              <NavLink to="/physics">physics</NavLink>
              <NavLink to="/software">tech</NavLink>
              {/* <a target='_blank' href="https://blog.ezl.me">blog</a> */}
              <a target="_blank" href="CV_Enrico_Zammit_Lonardelli.pdf" onClick={recordCVView}>
                resume
              </a>
              <NavLink to="/contact">contact</NavLink>
              <a
                href="https://www.linkedin.com/in/enricozammitl/"
                className="fa icon alt fa-linkedin"
              />
              <a href="https://github.com/enricozammitlon" className="fa icon alt fa-github" />
              <a href="https://gitlab.com/enricozammitlon" className="fa icon alt fa-gitlab" />
            </p>
          </div>
          <Routes />
        </div>
        <div className="piece scanlines noclick" />
        <div className="piece glow noclick" />
      </div>
    </div>
  );
}
export default withRouter(App);
