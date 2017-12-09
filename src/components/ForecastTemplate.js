import React, { Component } from 'react';

class ForecastTemplate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      detailedView: this.props.detailedView,
    };
  }

  template = () => {
    const n = this.props.info ? this.props.info : {};

    return (
      <div>
        { (this.props.detailedView) ? (
          <ul className="Forecast-template detailed-view">
            <li className="t-icon"><img src={n.icon} alt={n.description} /></li>
            <li className="t-item t-description">{n.description}</li>
            <li className="t-item t-tempMin">Min Temp: {this.props.tempFormatC ? tempC(n.tempMin) : tempF(n.tempMin)}</li>
            <li className="t-item t-tempMax">Max Temp: {this.props.tempFormatC ? tempC(n.tempMax) : tempF(n.tempMax)}</li>
            <li className="t-item t-windspeed">Wind Speed: {n.windSpeed}m/s</li>
            <li className="t-item t-windtemp">Wind Direction: {n.windDeg.toFixed(1)} deg</li>
            <li className="t-item t-humidity">Humidity: {n.humidity}%</li>
            <li className="t-item t-pressure">Atmospheric Pressure: {(n.pressure*.1).toFixed(2)} kPa</li>
          </ul>
        ):(
          <ul className="Forecast-template simple-view">
            <li className="t-icon"><img src={n.icon} alt={n.description} /></li>
            <li className="t-item t-description">{n.description}</li>
            <li className="t-item t-temp">Temp: {this.props.tempFormatC ? tempC(n.temp) : tempF(n.temp)}</li>
          </ul>  
        )}
      </div>
    );
  }

  render() {
    return (
      (this.props.info ? <div>{this.template()}</div> : <div>Loading...</div>)
    );
  }
}

export default ForecastTemplate;

function tempC(k) {
  const c = `${(k - 273.15).toFixed(1)}\u{00b0}C`;
  return c;
}

function tempF(k) {
  const f = `${((5/7)*(k - 273.15) + 32).toFixed(1)}\u{00b0}F`;
  return f;
}
