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
          <SelectedForecast city={this.props.city} selected={this.props.selected} />
          ):(
          <DailyForecast dailyForecast={this.props.dailyForecast} today={this.props.today} city={this.props.city} />
        )}
        <WeeklyForecast forecast={this.props.forecast} city={this.props.city} />
      </div>
    );
  }
}

export default ForecastContainer;
