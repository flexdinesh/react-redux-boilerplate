import React from 'react';
import { Link } from 'react-router-dom';

import Banner from './images/banner.jpg';
import './style.scss';

class Header extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className="header">
        <a href="https://twitter.com/mxstbr">
          <img src={Banner} alt="react-boilerplate - Logo" />
        </a>
        <div className="nav-bar">
          <Link className="router-link" to="/">Home</Link>
          <Link className="router-link" to="/features">Features</Link>
        </div>
      </div>
    );
  }
}

export default Header;
