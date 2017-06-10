import React, { Component } from 'react';
import logo from '../logo.svg';

class Header extends Component {
  render() {
    return (
      <div className="Header">
        <img src={logo} className="Logo" alt="logo" />
        <h2>Welcome to React</h2>
      </div>
    );
  }
}

export default Header;