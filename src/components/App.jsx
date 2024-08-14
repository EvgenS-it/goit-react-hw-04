// import { useState, useEffect } from 'react';
import './App.css';
import SearchBox from './SearchBox/SearchBox.jsx';
import ImageGallery from './ImageGallery/ImageGallery.jsx';
import Loader from './Loader/Loader.jsx';
import ErrorMessage from './ErrorMessage/ErrorMessage.jsx';
import LoadMoreBtn from './LoadMoreBtn/LoadMoreBtn.jsx';
import ImageModal from './ImageModal/ImageModal.jsx';

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <SearchBox />
        <ImageGallery />
        <Loader />
        <ErrorMessage />
        <LoadMoreBtn />
        <ImageModal />
      </div>
    </>
  );
}

export default App;
