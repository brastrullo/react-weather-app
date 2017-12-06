import React, { Component } from 'react';
import moment from 'moment';


class Header extends Component {
  dayOrNight = () => {
    const h = moment().format("H");
    let logoSrc = 'http://openweathermap.org/img/w/';
    if (h >= 8 && h <= 16) {
      return logoSrc += '01d.png';
    }
    if ((h >= 17 && h <= 23) || (h >= 0 && h <=7)) {
      return logoSrc += '01n.png';
    }
  }

  render() {
    return (
      <header className="App-header">
        <img src={this.dayOrNight()} className="App-icon" alt="Time of day icon" />
        <h1 className="App-city">{this.props.city}</h1>
      </header>
    );

  }
}

export default Header;