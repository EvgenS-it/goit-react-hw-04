import './App.css';
import { useEffect, useState } from 'react';
// import SearchBar from './SearchBar/SearchBar.jsx';
// import fetchImages from '../api/api.js';
import axios from 'axios';
import ImageGallery from './ImageGallery/ImageGallery.jsx';
// import Loader from './Loader/Loader.jsx';
import ErrorMessage from './ErrorMessage/ErrorMessage.jsx';
// import LoadMoreBtn from './LoadMoreBtn/LoadMoreBtn.jsx';
// import ImageModal from './ImageModal/ImageModal.jsx';

function App() {
  const [images, setImages] = useState(null);

  useEffect(() => {
    const fetchImages = async (query = 'cat', page = 1) => {
      const { data } = await axios.get(
        'https://api.unsplash.com/search/photos',
        {
          params: {
            query,
            page,
            orientation: 'landscape',
          },
          headers: {
            Authorization:
              'Client-ID dLBR2aie19Pf8Zk_xUX3vQu4vQ20Et0vPLq_v8BBqmM',
          },
        }
      );
      setImages(data.results);
      console.log(data.results);
    };

    fetchImages();
  }, []);

  return (
    <>
      {/* <SearchBar hadleSearch={fetchList} /> */}
      {Array.isArray(images) && images.length === 0 ? (
        <ErrorMessage />
      ) : (
        <ImageGallery images={images} />
      )}

      {/* <Loader /> */}
      {/* <ErrorMessage /> */}
      {/* <LoadMoreBtn /> */}
      {/* <ImageModal /> */}
    </>
  );
}

export default App;
