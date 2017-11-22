import React, { Component } from 'react';

class WeeklyForecast extends Component {
  render() {
    return (
      <div>
        <h2>Weekly {this.props.city}</h2>
      </div>
    );
  }
}

export default WeeklyForecast;