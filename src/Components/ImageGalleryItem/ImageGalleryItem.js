import React from 'react';
import styles from './styles.module.css';
import PropTypes from 'prop-types';

const ImageGalleryItem = ({ images }) => {
  return images.map(({ id, webformatURL, type }) => (
    <li key={id} className={styles.ImageGalleryItem}>
      <img
        id={id}
        src={webformatURL}
        alt={type}
        className={styles.ImageGalleryItemImage}
      />
    </li>
  ));
};

export default ImageGalleryItem;

ImageGalleryItem.propTypeS = {
  images: PropTypes.shape({
    id: PropTypes.number.isRequired,
    webformatURL: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
  }),
};
