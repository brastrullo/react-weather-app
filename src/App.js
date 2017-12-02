import React, { Component } from 'react';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import ForecastContainer from './components/ForecastContainer';
import ApiHandler from './components/ApiHandler';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    const d = new Date();
    const today  = `${d.toString().substr(0,3)} ${d.toLocaleString().substr(0,10)}`;

    this.state = {
      city: "Toronto,CA",
      forecast: [],
      dailyForecast: [],
      avgPressure: null,
      today: today,
      selected: null
    };
  }

  componentWillMount() {
    this.updateForecast();
  }

  updateForecast = (obj) => {this.setState(obj)};

  render() {
    return (
      <div className="App">
        <Header city={this.state.city} />
        <SearchBar apiCall={this.state.city} />
        <ForecastContainer 
          today={this.state.today} 
          state={this.state} 
          dailyForecast={this.state.dailyForecast} 
          forecast={this.state.forecast} selected={this.state.selected} 
          city={this.state.city} 
        />
        <ApiHandler city={this.state.city} updateForecast={this.updateForecast} />
      </div>
    );
  }
}

export default App;