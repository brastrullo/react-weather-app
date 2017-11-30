import React, { Component } from 'react';
import moment from 'moment';
import ApiHandler from './ApiHandler';

class DailyForecast extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dailyForecast: []
    };
  }

  updateForecast = (obj) => {this.setState({dailyForecast: obj.dailyForecast})};

  render() {
    return (
      <div>
        <h2>{this.props.today} {moment().format()}</h2>
        <ul><li>{JSON.stringify(this.state.dailyForecast)}</li></ul>
        <ApiHandler updateForecast={this.updateForecast} />
      </div>
    );
  }
}

export default DailyForecast;