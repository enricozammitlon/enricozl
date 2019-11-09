import React, { Component } from 'react';
import './css/softwareng.css';
import 'font-awesome/css/font-awesome.min.css';

import { withRouter , NavLink } from "react-router-dom";
import Routes from "./routes";


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      toggled: 1
    };

  }

  toggleMenu = toggle => {
    this.setState({
      toggled: !this.state.toggled
    });
  }

/*
    <div className={this.state.toggled ? "menu-toggle" : "menu-toggle on"} onClick={this.toggleMenu}>
      <div className="one"></div>
      <div className="two"></div>
      <div className="three"></div>
    </div>
    <nav>
      <ul role="navigation" className={this.state.toggled ? "hidden" : ""} id="menu-stuff">
        <li><NavLink to="/software">software engineering</NavLink></li>
        <li><NavLink to="/physics">physics</NavLink></li>
        <li><NavLink to="/cv">resume</NavLink></li>
        <li><NavLink to="/contact">contact</NavLink></li>
      </ul>
    </nav>
*/

  render() {
  return (
    <div className="noisy">
      <div className="frame">
        <div className="piece output">
          <div className="Menu">
            <p className="menu-line">
            <NavLink to="/">home</NavLink>
            <NavLink to="/physics">physics</NavLink>
            <NavLink to="/software">tech</NavLink>
            {/*<a target='_blank' href="https://blog.ezl.me">blog</a>*/}
            <a target='_blank' href="CV_Enrico_Zammit_Lonardelli.pdf">resume</a>
            <NavLink to="/contact">contact</NavLink>
            <a href="https://www.linkedin.com/in/enrico-zammit-lonardelli/" className="fa icon alt fa-linkedin"></a>
            <a href="https://github.com/enricozammitlon" className="fa icon alt fa-github"></a>
            </p>
          </div>
          <Routes />
        </div>
        <div className="piece scanlines noclick"></div>
        <div className="piece glow noclick"></div>
      </div>
    </div>
  );
}
}
export default withRouter(App);