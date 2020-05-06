import React, { Component } from 'react';

export class SearchBar extends Component {
  render() {
    return (
      <div>
        <form>
          <label></label>
          <input type="text" value="" placeholder="Search..." />
          <br />
          <br />
          <input type="checkbox" id="checkbox" />
          <label for="checkbox">Only show products on stock.</label>
        </form>
      </div>
    );
  }
}

export default SearchBar;

