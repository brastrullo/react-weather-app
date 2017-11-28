import React, { Component } from 'react';

class DailyForecast extends Component {
  render() {
    return (
      <div>
        <h2>{this.props.today}</h2>
      </div>
    );
  }
}

export default DailyForecast;