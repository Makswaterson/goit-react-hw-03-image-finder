import { Component } from 'react';
import PropTypes from 'prop-types';
import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';

export const ImageGallery = ({ pictures }) => {
  console.log(pictures);
  return (
    <ul className="gallery">
      {pictures.map(({ id, webformatURL, largeImageURL, tags }) => {
        return (
          <ImageGalleryItem
            key={id}
            webformatURL={webformatURL}
            tags={tags}
            largeImageURL={largeImageURL}
          />
        );
      })}
    </ul>
  );
};
