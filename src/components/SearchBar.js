import React, { Component } from 'react';
import Nedb from 'nedb/browser-version/out/nedb.min.js';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = { searchQuery: null };
  }

  fetchCityList = (query) => {
    const db = new Nedb({filename: '../city.list.min.json', autoload: true, timestampData: true});

    // let cityID = null;

    console.log(db);

    db.count({}, function (err, count) {
      console.log('Query Count:', count);
    });

    // if (/^\w+$/.test(query)) {
    //   // console.log("City:", query);
    //   db.find({}, function (err, docs) {
    //     console.log(db);
    //   });
    // }
    // if (/^\d+$/.test(query)) {
    //   // console.log("ID:", query);
    //   db.find({id: query}, function (err, docs) {
    //     console.log(docs[0]);
    //   });
    // }

  }

  handleKeyPress = (e) => {
    let query = document.querySelector('#searchCity').value.replace(/[^a-zA-Z0-9,]/g, "");
    query = query.replace(/\s\s+/g,"");

    if(query.length >= 3) {
      this.fetchCityList(query);
    }

    // let filtered = this.state.contactList.filter((contact) =>
    //   contact.contactName.toLowerCase().includes(query.toLowerCase()) ||
    //   contact.contactCell.includes(query)
    // );
    // this.props.filterContacts(filtered);
  }

  render() {
    return (
      <div className="Search-bar">
        <input
          className="Search-input"
          id="searchCity"
          placeholder="Enter City or City ID"
          list="city-list"
          type="search"
          onInput={this.handleKeyPress}
        />
        <datalist id="city-list"></datalist>
        <button className="Search-button">Search</button>

      </div>
    );
  }
}

export default SearchBar;
