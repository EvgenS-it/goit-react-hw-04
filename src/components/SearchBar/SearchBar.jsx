import css from './SearchBar.module.css';
import PropTypes from 'prop-types';

const SearchBar = ({ hadleSearch }) => {
  const { header, form, input, searchBtn } = css;
  return (
    <header className={header}>
      <form className={form}>
        <input
          className={input}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        <button type="submit" className={searchBtn} onSubmit={hadleSearch}>
          Search
        </button>
      </form>
    </header>
  );
};

SearchBar.propTypes = {
  handleSubmit: PropTypes.func,
};

export default SearchBar;
