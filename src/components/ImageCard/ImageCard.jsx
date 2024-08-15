import css from './ImageCard.module.css';
import PropTypes from 'prop-types';

const ImageCard = ({ name, url }) => {
  const { imgContainer, img } = css;
  return (
    <div className={imgContainer}>
      <img src={url} alt={name} className={img} />
    </div>
  );
};

ImageCard.propTypes = {
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default ImageCard;
