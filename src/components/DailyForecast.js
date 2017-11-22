import React, { Component } from 'react';

class DailyForecast extends Component {
  render() {
    return (
      <div>
        <h1>Today {this.props.city}</h1>
      </div>
    );
  }
}

export default DailyForecast;