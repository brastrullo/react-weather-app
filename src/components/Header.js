import React, { Component } from 'react';
import logo from '../logo.svg';

class Header extends Component {
  render() {
    let appLogo = "App Logo";
    return (
      <header className="App-header">
        <img src={logo} className="App-logo" alt={appLogo} />
        <h1 className="App-title">{this.props.city}</h1>
      </header>
    );

  }
}

export default Header;