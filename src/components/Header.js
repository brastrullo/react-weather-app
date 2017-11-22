import React, { Component } from 'react';
import logo from '../logo.svg';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = { city: props.city};
  }
  render() {
    let appLogo = "App Logo";
    return (
      <header className="App-header">
        <img src={logo} className="App-logo" alt={appLogo} />
        <h1 className="App-title">{this.state.city}</h1>
      </header>
    );

  }
}

export default Header;