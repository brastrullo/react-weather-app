import React, { Component } from 'react';
import ForecastTemplate from './ForecastTemplate';

class WeeklyForecast extends Component {
  componentWillMount() {
    this.forecastArray();
    this.AvgWeeklyKpa();
  }

  forecastArray = () => {
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
    if (!this.props.detailedView) {
      day = (day.filter(n => n.timeText === "Morning" || n.timeText === "Afternoon" ));
    }
    return (
      day.map((n,i) =>
        <li key={`i${i}`} className="Forecast-item">
          <p className="Forecast-time-header">{n.timeText}</p>
          <ForecastTemplate tempFormatC={this.props.tempFormatC} detailedView={this.props.detailedView} className="Weekly-forecast-template" info={n} />
        </li>
      )
    );
  }

  AvgWeeklyKpa = () => {
    const forecast = this.props.forecast;
    const forecastArray = forecast.map((n,i) => n.info.map((m,i) => m.pressure));
    let sum = (function sum() {
      let weekly = 0;
      forecastArray.forEach(hourly => {
        let avgDaily = 0;
        avgDaily += (hourly.reduce((a,b) => {return a + b}));
        return weekly += avgDaily/hourly.length;
      });
      return weekly;
    }());
    return `${((sum/forecastArray.length)*.1).toFixed(2)} kPa`;
  }

  render() {
    let view = (this.props.detailedView ? "Detailed" : "Simple");
    return (
      <section className="Weekly-forecast-section">
        <h2 className="Weekly-header">{view} Forecast for Next 5 Days</h2>
        <p className="Weekly-kpa">Average Amostpheric Pressure for week: {this.AvgWeeklyKpa()}</p>
        <ul className="Weekly-forecast-container">{this.forecastArray()}</ul>
      </section>
    );
  }
}

export default WeeklyForecast;
