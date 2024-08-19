import css from './LoadMoreBtn.module.css';
import PropTypes from 'prop-types';

const LoadMoreBtn = ({ onLoadMore }) => {
  return (
    <>
      <button type="button" onClick={onLoadMore} className={css.moreBtn}>
        Load more
      </button>
    </>
  );
};

LoadMoreBtn.propTypes = {
  handleSubmit: PropTypes.func,
};

export default LoadMoreBtn;
