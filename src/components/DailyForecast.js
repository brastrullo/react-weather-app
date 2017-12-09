import React, { Component } from 'react';
import moment from 'moment';
import ForecastTemplate from './ForecastTemplate';

class DailyForecast extends Component {
  componentWillMount() {
    this.dailyForecast();
  }

  dailyForecast = () => {
    const n = this.props.dailyForecast;
    return <ForecastTemplate tempFormatC={this.props.tempFormatC} detailedView={this.props.detailedView} className="Daily-forecast-template" info={n} />;
  }

  render() {
    return (
      <section className="Daily-forecast-section">
        <h2 className="Daily-forecast-header">{moment().format("dddd, MMMM Do YYYY")}</h2>
        {this.dailyForecast()}
      </section>
    );
  }
}

export default DailyForecast;