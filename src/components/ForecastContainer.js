import React, { Component } from 'react';
import SelectedForecast from './SelectedForecast';
import DailyForecast from './DailyForecast';
import WeeklyForecast from './WeeklyForecast';

class ForecastContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      detailedView: false,
      tempFormatC: true,
    };
  }

  tempFormatToggle = (e) => {
    e.preventDefault();
    this.setState(prevState => ({ tempFormatC: !prevState.tempFormatC }));
    console.log(this.state);
  }

  handleClick = (e) => {
    e.preventDefault();
    this.setState (prevState => ({ detailedView: !prevState.detailedView }));
    console.log(this.state.detailedView);
  }
  render() {
    return (
      <div>
        <button onClick={this.tempFormatToggle}>Format: {this.state.tempFormatC ? 'Celsius' : 'Farenheit'}</button>
        <button onClick={this.handleClick}>
          {this.state.detailedView ? `Show Detailed View \u{25B4}` : `Hide Detailed View \u{25BE}`}
        </button>
        {!typeof this.props.selected == null ? (
          <SelectedForecast selected={this.props.selected} />
          ):(
          <DailyForecast tempFormatC={this.state.tempFormatC} dailyForecast={this.props.dailyForecast} />
        )}
        <WeeklyForecast tempFormatC={this.state.tempFormatC} detailedView={this.state.detailedView} forecast={this.props.forecast} />
      </div>
    );
  }
}

export default ForecastContainer;
