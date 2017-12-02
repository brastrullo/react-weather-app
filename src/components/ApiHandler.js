import { Component } from 'react';
import moment from 'moment';

class ApiHandler extends Component {
  componentWillMount() {
    this.getData(this.props.city);
  }

  getData = (city) => {
    apiCallDay(city).then(n => {
      let info = formatInfo(n);
      info.day = moment().toString().slice(0,3);
      const obj = {dailyForecast: info, avgPressure: "pressure" + n.main.pressure};
      this.props.updateForecast(obj);
    });

    apiCallWeek(city).then(n => {
      const week = [1,2,3,4].map((el)=> `${moment().add(el,'days').format('YYYY-MM-DD')}`);
      const weekly = [];
      const forecast = (function forecast() {
        week.forEach(day => {
          const getDay = `${moment(day).format('ddd MMM DD')}`;
          const daysFiltered = n.list.filter(item => moment.unix(item.dt).format('YYYY-MM-DD').includes(day));
          const formattedWeather = [];
          daysFiltered.forEach(timeInterval => {
            const info = formatInfo(timeInterval);
            formattedWeather.push(info);
          });
          weekly.push({
            weekday: getDay,
            info: formattedWeather
          });
        });
        return weekly;
      }());

      this.props.updateForecast({forecast: forecast});
      return weekly;
    });
  }


  render() {return (null);}
}

export default ApiHandler;

const apiCallWeek = (city) => {
  console.log(city);
  return fetch(apiCallUrl(city))
  .then(checkStatus)
  .catch(err => console.log('Request failed', err));
};

const apiCallDay = (city) => {
  return fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=cedaf21284dfbfaad135a579104ffa1d`)
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
  let formatted;

  switch(true) {
    case (h === 12):
      formatted = "12pm";
      break;
    case (h === 0):
      formatted = "12am";
      break;
    case (pm):
      formatted = `${h - 12}pm`;
      break;
    case (am):
      formatted = `${h}am`;
      break;
    default:
      break;
  }
  return formatted;
}

function formatInfo(raw) {
  const n = raw;
  const info = {
    dt: moment.unix(n.dt).format("ddd MMM DD YYYY"),
    time: formatHour(n.dt_txt),
    temp: formatTemp(n.main.temp),
    windSpeed: n.wind.speed,
    windTemp: n.wind.deg,
    description: n.weather[0].description,
    humidity: n.main.humidity,
    pressure: n.main.pressure,
  };
  return info
}


function checkStatus(res) {
  if(res.ok) {
      return res.json();
    }
  throw new Error('Network response was not ok.');
}

function apiCallUrl(city) {
  const url = 'http://api.openweathermap.org/data/2.5/forecast';
  const APIKEY = 'cedaf21284dfbfaad135a579104ffa1d';
  const options = {
    q: `${city}`,
    APPID: `${APIKEY}`,
  };
  const q = Object.keys(options).map(key => `${key}=${options[key]}`);
  const fullUrl = `${url}?${q.join('&')}`;
  console.log(fullUrl);
  return fullUrl;
}
