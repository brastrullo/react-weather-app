import React, { Component } from 'react';
import ForecastTemplate from './ForecastTemplate';

class WeeklyForecast extends Component {
  componentWillMount() {
    this.detailedForecastArray();
  }

  detailedForecastArray = () => {
    const forecast = this.props.forecast;
    return (
      forecast.map((n,i) =>
        <li key={`day${i}`} className="Days-container">
            <p className="Day-header">{n.weekday}</p>
            <ul className="Day-item">{this.dayArray(n.info)}</ul>
        </li>
      )
    );
  }

  dayArray = (day) => {
    return (
      day.map((n,i) =>
        <li key={`i${i}`} className="Forecast-item">
          <p className="Forecast-time-header">{n.time}</p>
          <ForecastTemplate className="Weekly-forecast-template" info={n} />
        </li>
      )
    );
  }

  simpleForecast = () => {
    const forecast = this.props.forecast;

    // forecast.filter((n,i) => {

    // });
    console.log(forecast.info)
    // return (
    //   forecast.map((n,i) =>
    //     <li key={`day${i}`} className="Days-container">
    //         <p className="Day-header">{n.weekday}</p>
    //         <ul className="Day-item">{this.dayArray(n.info)}</ul>
    //     </li>
    //   )
    // );
  }

  render() {
    return (
      <section className="Weekly-forecast-section">
        <h2 className="Weekly-header">Forecast for Next 5 Days:</h2>
        <p className="Weekly-kpa">Average Amostpheric Pressure for week: {this.props.avgPressure}</p>
        {!(this.props.detailedView) ? (
          <ul className="Weekly-forecast-container">{this.detailedForecastArray()}</ul>
          ) : (
          <ul className="Weekly-forecast-container">{this.simpleForecast()}</ul>
        )}
      </section>
    );
  }
}

export default WeeklyForecast;
