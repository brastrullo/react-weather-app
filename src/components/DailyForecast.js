import React, { Component } from 'react';
import moment from 'moment';
import ForecastTemplate from './ForecastTemplate';

class DailyForecast extends Component {
  componentWillMount() {
    this.dailyForecast();
  }

  dailyForecast = () => {
    const n = this.props.dailyForecast;
    return <ForecastTemplate info={n} />;
  }

  render() {
    return (
      <div>
        <h2>{moment().format("dddd, MMMM Do YYYY")}</h2>
        {this.dailyForecast()}
      </div>
    );
  }
}

export default DailyForecast;