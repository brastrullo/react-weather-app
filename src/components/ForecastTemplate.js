import React, { Component } from 'react';

class ForecastTemplate extends Component {
  template = () => {
    const n = this.props.info ? this.props.info : {};
    
    return (
      <ul className="Forecast-template">
        <li className="Template-icon"><img src={n.icon} alt={n.description} /></li>
        <li className="Template-item">Forecast: {n.description}</li>
        <li className="Template-item">Wind Speed: {n.windSpeed}</li>
        <li className="Template-item">Wind Temp: {n.windTemp}</li>
        <li className="Template-item">Humidity: {n.humidity}</li>
        <li className="Template-item">Atmospheric Pressure: {n.pressure}</li>
      </ul>
    );
  }

  render() {
    return (
      (this.props.info ? <div>{this.template()}</div> : <div>Loading...</div>)
    );
  }
}

export default ForecastTemplate;
