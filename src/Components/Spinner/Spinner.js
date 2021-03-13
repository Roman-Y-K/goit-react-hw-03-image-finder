import React from 'react';
import { createPortal } from 'react-dom';
import styles from './styles.module.css';

const modalRootRef = document.querySelector('#modal-root');

const Spinner = ({ children }) => {
  return createPortal(
    <div className={styles.spinner}> {children}</div>,
    modalRootRef,
  );
};

export default Spinner;
