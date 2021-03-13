import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import styles from './styles.module.css';
import PropTypes from 'prop-types';

const modalRootRef = document.querySelector('#modal-root');

class Modal extends Component {
  static propTypes = {
    showModal: PropTypes.func.isRequired,
    modalImg: PropTypes.string.isRequired,
  };

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = e => {
    if (e.code === 'Escape') {
      this.props.showModal();
    }
  };

  handleOverleyClick = e => {
    if (e.target === e.currentTarget) {
      this.props.showModal();
    }
  };

  render() {
    return createPortal(
      <div onClick={this.handleOverleyClick} className={styles.Overlay}>
        <div className={styles.Modal}>
          <img src={this.props.modalImg} alt="" />
        </div>
      </div>,
      modalRootRef,
    );
  }
}

export default Modal;
