import { Component } from 'react';
import PropTypes from 'prop-types';
import { FcSearch } from 'react-icons/fc';

export class Searchbar extends Component {
  render() {
    return (
      <header className="searchbar">
        <form className="form">
          <button type="submit" className="search-button">
            <FcSearch width={20} />
            <span>Search</span>
          </button>

          <input
            className="input"
            type="text"
            autocomplete="off"
            autofocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}
