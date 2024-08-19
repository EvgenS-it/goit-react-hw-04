import './App.css';
import { useEffect, useState } from 'react';
import SearchBar from './SearchBar/SearchBar.jsx';
import requestImages from '../services/api.js';
import ImageGallery from './ImageGallery/ImageGallery.jsx';
import Loader from './Loader/Loader.jsx';
import ErrorMessage from './ErrorMessage/ErrorMessage.jsx';
import LoadMoreBtn from './LoadMoreBtn/LoadMoreBtn.jsx';
// import ImageModal from './ImageModal/ImageModal.jsx';
import { Toaster } from 'react-hot-toast';

function App() {
  const [images, setImages] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [query, setQuery] = useState(null);
  const [totalPages, setTotalPages] = useState(0);
  const [page, setPage] = useState(1);

  useEffect(() => {
    if (query === null) return;

    const fetchImages = async () => {
      try {
        setError(null);
        setIsLoading(true);
        const data = await requestImages(query, page);
        // setImages(data.results);
        setImages(prevImages => [...prevImages, ...data.results]);
        setTotalPages(data.total_pages);
        console.log(data);

        console.log(data.results);
      } catch (err) {
        setError(err.message);
        console.log(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchImages();
  }, [query, page]);

  const onSearch = searchTerm => {
    setError(null);
    setImages([]);
    setQuery(searchTerm);
    setPage(1);
    console.log(searchTerm);
  };

  const onLoadMore = () => setPage(prevPage => prevPage + 1);

  return (
    <>
      <SearchBar onSearch={onSearch} />

      {error !== null && <ErrorMessage errorMsg={error} />}
      {Array.isArray(images) && images.length === 0 ? (
        <p>
          No results for your query &quot;{query}&quot;. Please, try another
          keyword.
        </p>
      ) : (
        <ImageGallery images={images} />
      )}
      {isLoading && <Loader />}

      {Array.isArray(images) && images.length !== 0 && page < totalPages && (
        <LoadMoreBtn onLoadMore={onLoadMore} />
      )}
      {/* <ImageModal /> */}
      <Toaster position="top-center" reverseOrder={false} />
    </>
  );
}

export default App;
