import React, { Component } from 'react';
import { fetchImages } from '../services/pixabay-api';
import { Searchbar } from './Searchbar/Searchbar';

export class App extends Component {
  state = {
    inputValue: '',
    pictures: [],
    page: 1,
  };

  onFormSubmit = inputValue => {
    this.setState({ inputValue: inputValue });
  };

  componentDidUpdate(prevProps, prevState) {
    const { inputValue, page } = this.state;
    if (prevState.inputValue !== inputValue || prevState.page !== page) {
      this.fetchPictures(inputValue, page);
    }
  }
  fetchPictures = async (value, page) => {
    console.log(value);
    try {
      const { hits } = await fetchImages(value, page);
      this.setState({ pictures: hits });
      console.log(hits);
    } catch (error) {}
  };

  render() {
    return (
      <div className="app">
        <Searchbar onSubmit={this.onFormSubmit} />
      </div>
    );
  }
}
