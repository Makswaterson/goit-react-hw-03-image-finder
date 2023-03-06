import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FcSearch } from 'react-icons/fc';

export class Searchbar extends Component {
  state = {
    input: '',
  };

  onChange = e => {
    this.setState({ input: e.target.value.toLowerCase().trim() });
  };

  onSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state.input);
    console.log(this.props.onSubmit);
    this.setState({ input: '' });
  };

  render() {
    const { input } = this.state;
    return (
      <header className="searchbar">
        <form className="form" onSubmit={this.onSubmit}>
          <button type="submit" className="search-button">
            <FcSearch width={20} />
            <span className="search-button-label">Search</span>
          </button>

          <input
            value={input}
            className="input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.onChange}
          />
        </form>
      </header>
    );
  }
}