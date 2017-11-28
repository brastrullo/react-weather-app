import { Component } from 'react';

class ApiHandler extends Component {
  constructor(props) {
    super(props);

    this.state = {
      forecast: [],
      city: 'Vancouver',
    };
  }

  componentWillMount() {
    apiCall().then(n => {
      const d = new Date();
      const ISODate = d.toISOString().substr(0,10);
      const UTCDate = `${d.getUTCFullYear()}-${d.getUTCMonth() + 1}-${d.getUTCDate() + 1}`;
      const UTCWee = (function() {
        const days = [...Array(7).keys()].slice(2);
        // const arr = days.fill(UTCDate);
        days.forEach((el, i, arr) => {
          console.log(`${d.getUTCFullYear()}-${d.getUTCMonth() + 1}-${d.getUTCDate() + el}`);
        });
        // console.log('arr:', arr);
      }());
      const UTCWeek = [...Array(6).keys()].slice(1);
      const city = `${n.city.name}, ${n.city.country}`;
      const dailyForecast = n.list.filter(item => item.dt_txt.includes(UTCDate));
      this.setState({
        city: city,
        forecast: n.list, 
        dailyForecast: dailyForecast
      });
      const choose = n.list.filter(item => item.dt_txt.include);
      // console.log(days);
      this.props.updateForecast(this.state);
    });
  }

  render() {return (null);}
}

export default ApiHandler;

const apiCall = () => {
  return fetch(apiCallUrl)
  .then(checkStatus)
  .catch(err => console.log('Request failed', err));
};

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
