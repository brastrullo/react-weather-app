import React, { Component } from 'react';

class SelectedForecast extends Component {
  render() {
    return (
        <div><h1>Selected {this.props.selected}</h1></div>
      );
  }
}

export default SelectedForecast;