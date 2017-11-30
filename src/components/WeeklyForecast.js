import React, { Component } from 'react';
import ApiHandler from './ApiHandler';

class WeeklyForecast extends Component {
  constructor(props) {
    super(props);

    this.state = {
      forecast: []
    };
  }

  forecastArray = () => {
    const forecast = this.state.forecast;
    return (
      forecast.map((n,i) =>
        <li key={`day${i}`}>
            <p>{n.day}</p>
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
            <div>
              <p>{n.time}</p>
              <p>{n.description}</p>
              <p>{n.temp}</p>
            </div>
          </li>
        </ul>
      )
    );
  }

  updateForecast = (obj) => {this.setState({forecast: obj.forecast})};

  render() {
    return (
      <div>
        <h2>Weekly Forecast</h2>
        <p>Average Amostpheric Pressure for week: {this.props.avgPressure}</p>
        <ul className="Contact-containers">{this.forecastArray()}</ul>
        <ApiHandler updateForecast={this.updateForecast} />
      </div>
    );
  }
}

export default WeeklyForecast;
