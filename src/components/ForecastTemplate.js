import React, { Component } from 'react';

class ForecastTemplate extends Component {
  template = () => {
    const n = this.props.info ? this.props.info : {};
    
    return (
      <ul>
        <li>Forecast: {n.description ? n.description : "null"}</li>
        <li>Wind Speed: {n.windSpeed ? n.windSpeed : "null"}</li>
        <li>Wind Temp: {n.windTemp ? n.windTemp : "null"}</li>
        <li>Humidity: {n.humidity ? n.humidity : "null"}</li>
        <li>Atmospheric Pressure: {n.pressure ? n.pressure : "null"}</li>
      </ul>
    );
  }
  render() {
    return <div>{this.template()}</div>;
  }
}

export default ForecastTemplate;
