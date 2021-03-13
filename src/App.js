import React, { Component } from 'react';
import SearchBar from './Components/SearchBar';
import ImageGallery from './Components/ImageGallery/index';
import fetchImage from './ApiServise';
import ImageGalleryItem from './Components/ImageGalleryItem';
import Button from './Components/Button';
import Modal from './Components/Modal';
import Loader from 'react-loader-spinner';
import Spinner from './Components/Spinner';

// import styles from './styles.module.css';

class App extends Component {
  state = {
    images: [],
    fetchQuery: '',
    page: 1,
    modal: false,
    modalImg: '',
    spinner: false,
  };

  componentDidUpdate(prevProp, prevState) {
    if (prevState.fetchQuery !== this.state.fetchQuery) {
      this.fetchImages();
    }

    this.scrollWindow();
  }

  scrollWindow() {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  }

  onChangeQuery = query => {
    this.setState({ fetchQuery: query, page: 1, images: [], spinner: true });
  };

  toggleModal = () => {
    this.setState(({ modal }) => ({
      modal: !modal,
    }));
  };

  showModal = e => {
    if (e.target.nodeName === 'IMG') {
      this.toggleModal();
    }

    this.getImgUrl(e);
  };

  getImgUrl = e => {
    const { images } = this.state;

    const targetImg = images.find(({ id }) => id === Number(e.target.id));

    this.setState({ modalImg: targetImg.largeImageURL });
  };

  fetchImages = () => {
    const { fetchQuery, page } = this.state;
    this.setState({ spinner: true });

    fetchImage(fetchQuery, page).then(images => {
      this.setState(prevState => ({
        images: [...prevState.images, ...images],
        spinner: false,

        page: (prevState.page += 1),
      }));
    });
  };

  render() {
    const { images, modal, modalImg, spinner } = this.state;
    return (
      <div>
        <SearchBar onSubmit={this.onChangeQuery} />
        <ImageGallery onClick={this.showModal}>
          <ImageGalleryItem images={images} />
        </ImageGallery>

        {images.length > 0 && <Button onClick={this.fetchImages} />}
        {modal && <Modal modalImg={modalImg} showModal={this.toggleModal} />}
        <Spinner>
          <Loader
            type="Puff"
            color="#00BFFF"
            height={100}
            width={100}
            visible={spinner}
          />
        </Spinner>
      </div>
    );
  }
}

export default App;
