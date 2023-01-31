import React from "react";
import { useState, useEffect } from "react";
import { Button } from "./Button/Button";
import { Loader } from "./Loader/Loader";
import { Modal } from "./Modal/Modal";
import { Searchbar } from "./Searchbar/Searchbar";
import { ImageGallery } from "./ImageGallery/ImageGallery";
import { fetchImages } from "services/api";
import css from "./App.module.css"


export const App = () => {
  const [ page, setPage ] = useState(1);
  const [ query, setQuery ] = useState('');
  const [ images, setImages ] = useState([]);
  const [ isLoading, setIsLoading ] = useState(false);
  const [ showModal, setShowModal ] = useState(false);
  const [ inputValue, setInputValue ] = useState('');
  const [ largeImageURL, setLargeImageURL ] = useState('')
  const [ showButton, setShowButton ] = useState(false)


  const onSubmit = (inputQuery) => {
    if (inputQuery !== query) {
      setImages([]);
      setPage(1);
      setQuery(inputQuery);
    }
  };

  const handleChange = (event) => {
      setInputValue(event.target.value.toLowerCase());
};

  const handleOnSubmit = (event) => {
    event.preventDefault();
    if (inputValue.trim() === "") {
        return alert(" Enter query! ");
    }

    onSubmit(inputValue);
};

  useEffect(() => {
    if(!query) return;

    const fetchQuery = async (value) => {
      setIsLoading(true);

      try {
        const response = await fetchImages(value, page);
        setImages((prevState) => [...prevState, ...response]);
        if (response.length === 0) {
          return alert(" Not found any picture! ");
        }
        if (response.length === 12 ) {
          setShowButton(true);
         }
        if (response.length < 12 ) {
         setShowButton(false);
        }
      } catch(error) {
        console.log("error");
      } finally {
        setIsLoading(false);
      }
    };

    fetchQuery(query);
  }, [page,query]);


  
  const loadMore = () => {
    setPage(prevState => prevState + 1);
  };

  const onOpen = (largeImageURL) => {
    setShowModal(true);
    setLargeImageURL(largeImageURL);
  };

  const onClose = () => {
    setShowModal(false);
    setLargeImageURL("");
  };
  
    
    return (
      <div className={css.App}>
        <Searchbar 
        handleOnSubmit={handleOnSubmit}
        inputValue={inputValue}
        handleChange={handleChange}
        />
        <ImageGallery images={images} onOpen={onOpen}/>
        { isLoading && <Loader /> }
        { showButton && ( 
        <Button onClick={loadMore}/> 
        )} 
        { showModal && 
        <Modal
        largeImage={largeImageURL}
        onClose={onClose}
        />}
      </div>
    );
  }
