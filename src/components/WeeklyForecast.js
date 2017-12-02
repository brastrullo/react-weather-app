import React, { Component } from 'react';
import ForecastTemplate from './ForecastTemplate';

class WeeklyForecast extends Component {
  componentWillMount() {
    this.forecastArray();
  }

  forecastArray = () => {
    const forecast = this.props.forecast;
    return (
      forecast.map((n,i) =>
        <li key={`day${i}`}>
            <p>{n.weekday}</p>
            {this.dayArray(n.info)}
        </li>
      )
    );
  }

  dayArray = (day) => { 
    return (
      day.map((n,i) =>
        <ul key={`i${i}`}>
          <li>
            <p>{n.time}</p>
            <ForecastTemplate info={n} />
          </li>
        </ul>
      )
    );
  }

  render() {
    return (
      <div>
        <h2>Weekly Forecast</h2>
        <p>Average Amostpheric Pressure for week: {this.props.avgPressure}</p>
        <ul className="Contact-containers">{this.forecastArray()}</ul>
      </div>
    );
  }
}

export default WeeklyForecast;
