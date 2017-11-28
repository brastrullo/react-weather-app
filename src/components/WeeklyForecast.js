import React, { Component } from 'react';

class WeeklyForecast extends Component {
  constructor(props) {
    super(props);

    let week = this.props.forecast;
    this.state = {
      week: week
    };

    // console.log(this.state.week);
  }
  forecastArray = () => {
    return (
      // week.map(obj => <li>asdf</li>)
      <li>asdf</li>
    );
  }

  render() {
    return (
      <div>
        <h2>Weekly Forecast</h2>
          <ul className="Contact-containers">{this.forecastArray()}</ul>
      </div>
    );
  }
}

export default WeeklyForecast;

// week.map(obj =>
//   <li key={obj.id} id={obj.id} className={"Contact-item " + ((this.props.selected === obj) ? "selected" : "")} onClick={() => this.selectContact(obj.id)}>
//     {this.props.selected === obj && <div className='Profile-pic'>{obj.contactName.charAt(0)}</div>}
//     {obj.contactName}
//     {this.props.selected === obj && <ContactOptions contact={this.props.selected} handleCall={this.props.callContact}/>}
//   </li>;
// );