import React from 'react';
import styles from './styles.module.css';
import PropTypes from 'prop-types';

const ImageGallery = ({ onClick, children }) => {
  return (
    <ul className={styles.ImageGallery} onClick={onClick}>
      {children}
    </ul>
  );
};

export default ImageGallery;

ImageGallery.propTypes = {
  onClick: PropTypes.func.isRequired,
};
