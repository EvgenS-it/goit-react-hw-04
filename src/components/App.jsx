import './App.css';
import { useEffect, useState } from 'react';
import SearchBar from './SearchBar/SearchBar.jsx';
import requestImages from '../services/api.js';
import ImageGallery from './ImageGallery/ImageGallery.jsx';
import Loader from './Loader/Loader.jsx';
import ErrorMessage from './ErrorMessage/ErrorMessage.jsx';
// import LoadMoreBtn from './LoadMoreBtn/LoadMoreBtn.jsx';
// import ImageModal from './ImageModal/ImageModal.jsx';
import { Toaster } from 'react-hot-toast';

function App() {
  const [images, setImages] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [query, setQuery] = useState(null);

  // useEffect(() => {
  //   const fetchImages = async () => {
  //     try {
  //       setIsLoading(true);
  //       const data = await requestImages();
  //       setImages(data.results);
  //       console.log(data.results);
  //     } catch (err) {
  //       setError(err.message);
  //       console.log(err.message);
  //     } finally {
  //       setIsLoading(false);
  //     }
  //   };

  //   fetchImages();
  // }, []);

  // SECOND useffect
  useEffect(() => {
    if (query === null) return;

    const fetchImages = async () => {
      try {
        setIsLoading(true);
        const data = await requestImages(query);
        setImages(data.results);
        console.log(data.results);
      } catch (err) {
        setError(err.message);
        console.log(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchImages();
  }, [query]);

  const onSearch = searchTerm => {
    setQuery(searchTerm);
    console.log(searchTerm);
  };

  return (
    <>
      <SearchBar onSearch={onSearch} />
      {isLoading && <Loader />}
      {error !== null && <ErrorMessage errorMsg={error} />}
      {Array.isArray(images) && images.length === 0 ? (
        <p>No results for your query... Try to change the keyword!</p>
      ) : (
        <ImageGallery images={images} />
      )}

      {/* <LoadMoreBtn /> */}
      {/* <ImageModal /> */}
      <Toaster position="top-center" reverseOrder={false} />
    </>
  );
}

export default App;
