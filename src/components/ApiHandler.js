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
      const obj = {dailyForecast: info, pressure: n.main.pressure};
      this.props.updateForecast(obj);
    });

    apiCallWeek(city).then(n => {
      const week = [1,2,3,4,5].map((el)=> `${moment().add(el,'days').format('YYYY-MM-DD')}`);
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

function timeText(t) {
  let text = '';
  t = parseInt(t, 10);
  switch (true) {
    case (t >= 0 && t <= 3):
      text = 'Late Night';
      break;
    case (t >= 4 && t <= 6):
      text = 'Early Morning';
      break;
    case (t >= 7 && t <= 9):
      text = 'Morning';
      break;
    case (t >= 10 && t <= 12):
      text = 'Noon';
      break;
    case (t >= 13 && t <= 15):
      text = 'Afternoon';
      break;
    case (t >= 16 && t <= 18):
      text = 'Late Afternoon';
      break;
    case (t >= 19 && t <= 21):
      text = 'Evening';
      break;
    case (t >= 22 && t <= 24):
      text = 'Late Evening';
      break;
    default:
      break;
  }
  return text;
}

function formatInfo(raw) {
  const n = raw;
  const info = {
    dt: moment.unix(n.dt).format("ddd MMM DD YYYY"),
    timeText: timeText(moment.unix(n.dt).format("H")),
    time: moment.unix(n.dt).format("hA"),
    tempMin: n.main.temp_min,
    tempMax:n.main.temp_max,
    temp: n.main.temp,
    windSpeed: n.wind.speed,
    windDeg: n.wind.deg,
    description: n.weather[0].description,
    humidity: n.main.humidity,
    pressure: n.main.pressure,
    icon: `http://openweathermap.org/img/w/${n.weather[0].icon}.png`,
  };
  return info;
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
