import React, { Component } from 'react';
import Header from './components/Header';
import SelectedForecast from './components/SelectedForecast';
import DailyForecast from './components/DailyForecast';
import WeeklyForecast from './components/WeeklyForecast';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    let apiCall = {
      city: 'Toronto'
    };
    this.state = {
      city: apiCall.city,
      selected: null
    };
  }
  render() {
    console.log(this.state.apiCall);
    return (
      <div className="App">
        <Header city={this.state.city} />
        {this.state.selected ? (
          <SelectedForecast city={this.state.city} selected={this.state.selected} />
          ):(
          <DailyForecast city={this.state.city}/>
        )}
        <WeeklyForecast city={this.state.city}/>
      </div>
    );
  }
}

export default App;
