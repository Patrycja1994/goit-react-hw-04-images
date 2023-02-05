import React from 'react';
import { useState, useEffect } from 'react';
import { Button } from './Button/Button';
import { Loader } from './Loader/Loader';
import { Modal } from './Modal/Modal';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { fetchImages } from 'services/api';
import css from './App.module.css';

export const App = () => {
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState('');
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [showModal, setShowModal] = useState({
    show: false,
    largeImageURL: '',
  });
  const [inputValue, setInputValue] = useState('');
  const [largeImageURL, setLargeImageURL] = useState('');

  const onSubmit = event => {
    event.preventDefault();
    if (inputValue === '') {
      return alert(' Enter query! ');
    }
    if (inputValue === query) return;
    setImages([]);
    setPage(1);
    setQuery(inputValue);
  };

  const handleChange = event => {
    setInputValue(event.target.value.toLowerCase());
  };

  useEffect(() => {
    if (!query) return;

    const fetchQuery = async value => {
      setIsLoading(true);

      try {
        const response = await fetchImages(value, page);
        setImages(prevState => [...prevState, ...response]);
        if (response.length === 0) {
          return alert(' Not found any picture! ');
        }
      } catch (error) {
        console.log('error');
      } finally {
        setIsLoading(false);
      }
    };

    fetchQuery(query);
  }, [page, query]);

  const loadMore = () => {
    setPage(prevState => prevState + 1);
  };

  const onOpen = largeImageURL => {
    setShowModal({
      show: true,
    });
    setLargeImageURL(largeImageURL);
  };

  const onClose = () => {
    setShowModal({
      show: false,
    });
    setLargeImageURL('');
  };

  return (
    <div className={css.App}>
      <Searchbar
        onSubmit={onSubmit}
        inputValue={inputValue}
        handleChange={handleChange}
      />
      <ImageGallery images={images} onOpen={onOpen} />
      {isLoading && <Loader />}
      {images.length % 12 === 0 && images.length !== 0 ? (
        <Button onClick={loadMore} />
      ) : (
        ''
      )}
      {showModal.show && <Modal largeImage={largeImageURL} onClose={onClose} />}
    </div>
  );
};
