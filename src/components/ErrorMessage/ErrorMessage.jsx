import css from './ErrorMessage.module.css';
import PropTypes from 'prop-types';

const ErrorMessage = ({ errMsg }) => {
  return (
    <>
      <p className={css.error}>Oops, something went wrong! {errMsg}</p>
    </>
  );
};

ErrorMessage.propTypes = {
  errMsg: PropTypes.string,
};

export default ErrorMessage;
