import css from './ImageGallery.module.css';
import ImageCard from '../ImageCard/ImageCard.jsx';
import PropTypes from 'prop-types';

const ImageGallery = ({ images }) => {
  return (
    <ul className={css.galeryList}>
      {images.map(image => {
        return (
          <li key={image.id} className={css.cardItem}>
            <ImageCard name={image.name} url={image.url} id={image.id} />
          </li>
        );
      })}
    </ul>
  );
};

ImageGallery.propTypes = {
  images: PropTypes.array,
};

export default ImageGallery;
