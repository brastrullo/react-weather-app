import React, { Component } from 'react';
import SelectedForecast from './SelectedForecast';
import DailyForecast from './DailyForecast';
import WeeklyForecast from './WeeklyForecast';

class ForecastContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      detailedView: false,
    };
  }

  handleClick = (e) => {
    e.preventDefault();
    this.setState(prevState => ({
      detailedView: !prevState.detailedView
    }));

  }
  render() {
    return (
      <div>
        <button onClick={this.handleClick}>
          {this.state.detailedView ? `Show Detailed View \u{25B4}` : `Hide Detailed View \u{25BE}`}
        </button>
        {!typeof this.props.selected == null ? (
          <SelectedForecast selected={this.props.selected} />
          ):(
          <DailyForecast dailyForecast={this.props.dailyForecast} />
        )}
        <WeeklyForecast detailedView={this.state.detailedView} forecast={this.props.forecast} />
      </div>
    );
  }
}

export default ForecastContainer;
