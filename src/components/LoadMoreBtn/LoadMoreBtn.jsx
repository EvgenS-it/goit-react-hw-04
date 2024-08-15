import css from './LoadMoreBtn.module.css';
import PropTypes from 'prop-types';

const LoadMoreBtn = ({ handleMoreImgs }) => {
  return (
    <>
      <button type="button" onClick={handleMoreImgs} className={css.moreBtn}>
        Load more
      </button>
    </>
  );
};

LoadMoreBtn.propTypes = {
  handleSubmit: PropTypes.func,
};

export default LoadMoreBtn;
