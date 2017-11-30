import { Component } from 'react';
import moment from 'moment';

class ApiHandler extends Component {
  constructor(props) {
    super(props);

    this.state = {
      forecast: [],
      dailyForecast: null,
      avgPressure: null,
    };
  }

  componentWillMount() {
    apiCallDay().then(n => {
      this.setState({dailyForecast: n, avgPressure: n.main.pressure});
      this.props.updateForecast(this.state);
    });

    apiCallWeek().then(n => {
      const UTCWeek = [1,2,3,4].map((el)=> `${moment.utc().add(el,'days').format().substr(0,10)}`);
      const weekly = [];
      const city = `${n.city.name}, ${n.city.country}`;
      const forecast = (function forecast() {
        UTCWeek.forEach(day => {
          const getDay = `${moment(day).toString().slice(0,3)}`;
          const daysFiltered = n.list.filter(item => item.dt_txt.includes(day));
          const formattedWeather = [];
          daysFiltered.forEach(timeInterval => {
            const n = timeInterval;
            const info = {
              time: formatHour(n.dt_txt),
              temp: formatTemp(n.main.temp),
              windSpeed: n.wind.speed,
              windTemp: n.wind.deg,
              description: n.weather[0].description,
              humidity: n.main.humidity,
              pressure: n.main.pressure,
            };
            formattedWeather.push(info);
          });
          weekly.push({
            day: getDay,
            info: formattedWeather
          });
        });
        return weekly;
      }());

      this.setState({
        city: city,
        forecast: forecast,
      });
      this.props.updateForecast(this.state);
      return weekly;
    });
    // .then((n) => {
    //   // const interval = [];
    //   // const day = (function day(n) {
    //   //   const arr = [];
    //   //   n.forEach(() => {
    //   //     arr.push[...Array(n.length).keys()].map(() => {

    //   //     });
    //   //   });
    //   // }());
    //   const formatWeather = (function formatWeather() {
    //     // let obj = {
    //     //   date: null,
    //     // };
    //     n.map((item,i) => {
    //       const day = (function() { return item[0].dt_txt; }());
    //       console.log(day);
    //     });
    //   }());
    // });
  }

  render() {return (null);}
}

export default ApiHandler;

const apiCallWeek = () => {
  return fetch(apiCallUrl)
  .then(checkStatus)
  .catch(err => console.log('Request failed', err));
};

const apiCallDay = () => {
  return fetch('http://api.openweathermap.org/data/2.5/weather?q=Toronto,CA&APPID=cedaf21284dfbfaad135a579104ffa1d')
  .then(checkStatus)
  .catch(err => console.log('Request failed', err));
};

function formatTemp(k) {
  const c = `${Number(k - 273.15).toFixed(1)}\u{00b0}C`;
  const f = `${Number((5/7)*(k - 273.15) + 32).toFixed(1)}\u{00b0}F`;
  return `${c}/${f}`;
}

function formatHour(t) {
  let h = moment.utc(t).hour();
  let pm = h <= 23 && h > 12;
  let am = h <= 12 && h > 1;

  switch(true) {
    case (h === 12):
      return "12pm";
      break;
    case (h === 0):
      return "12am";
      break;
    case (pm):
      return `${h - 12}pm`;
    case (am):
      return `${h}am`;
    default:
      return;
      break;
  }
}


function checkStatus(res) {
  if(res.ok) {
      return res.json();
    }
  throw new Error('Network response was not ok.');
}

const apiCallUrl = (function() {
  const url = 'http://api.openweathermap.org/data/2.5/forecast';
  const APIKEY = 'cedaf21284dfbfaad135a579104ffa1d';
  let city = "Toronto,CA";
  const options = {
    q: `${city}`,
    APPID: `${APIKEY}`,
  };
  const q = Object.keys(options).map(key => `${key}=${options[key]}`);
  const fullUrl = `${url}?${q.join('&')}`;
  console.log(fullUrl);
  return fullUrl;
}());
