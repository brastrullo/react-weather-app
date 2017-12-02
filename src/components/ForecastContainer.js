import React, { Component } from 'react';
import SelectedForecast from './SelectedForecast';
import DailyForecast from './DailyForecast';
import WeeklyForecast from './WeeklyForecast';

class ForecastContainer extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.city}</h1>
        {!typeof this.props.selected == null ? (
          <SelectedForecast selected={this.props.selected} />
          ):(
          <DailyForecast dailyForecast={this.props.dailyForecast} />
        )}
        <WeeklyForecast forecast={this.props.forecast} />
      </div>
    );
  }
}

export default ForecastContainer;
