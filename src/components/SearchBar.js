import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = { searchQuery: null };
  }

  handleKeyPress = (e) => {
    // let query = document.querySelector('#searchContacts').value.replace(/[^a-zA-Z0-9 ]/g, "");
    // let filtered = this.state.contactList.filter((contact) =>
    //   contact.contactName.toLowerCase().includes(query.toLowerCase()) ||
    //   contact.contactCell.includes(query)
    // );
    // this.props.filterContacts(filtered);
    console.log("handling keypress");
  }

  render() {
    return (
      <input
        className="Search-city"
        id="searchCity"
        placeholder="Enter City or City ID"
        type="search"
        onInput={this.handleKeyPress}
      />
    );
  }
}

export default SearchBar;
