import React, { Component } from 'react';
import logo from '../images/logo.png';

class Header extends Component {
  render() {
    return (
      <div className="Header">
        <img src={logo} className="Logo" alt="logo" />
      </div>
    );
  }
}

export default Header;