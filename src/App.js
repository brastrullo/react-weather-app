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
      city: null,
      forecast: null,
      dailyForecast: [],
      avgPressure: null,
      today: today,
      selected: null
    };
  }

  updateForecast = (obj) => {this.setState({
      city: obj.city,
      forecast: obj.forecast,
      dailyForecast: obj.dailyForecast,
      avgPressure: obj.avgPressure,
    });
    console.log('app:', this.state);
  }

  render() {
    return (
      <div className="App">
        <Header city={this.state.city} />
        <SearchBar apiCall={this.state.city} />
        <ForecastContainer today={this.state.today} forecast={this.state.forecast} selected={this.state.selected} city={this.state.city}/>
        <ApiHandler updateForecast={this.updateForecast} />
      </div>
    );
  }
}

export default App;