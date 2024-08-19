import css from './SearchBar.module.css';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import toast from 'react-hot-toast';

// for Formik
const INITIAL_VALUES = {
  searchTerm: '',
};

const SearchBar = ({ onSearch }) => {
  const { form, label, input, btn, errorText } = css;

  const handleSubmit = values => {
    if (values.searchTerm.length === 0) {
      toast.error('Please enter a search query');
      return;
    } else {
      onSearch(values.searchTerm);
    }
  };

  return (
    <Formik initialValues={INITIAL_VALUES} onSubmit={handleSubmit}>
      {() => {
        return (
          <Form className={form}>
            <label className={label}>
              <Field
                className={input}
                type="text"
                autoComplete="off"
                autoFocus
                name="searchTerm"
                placeholder="Search images and photos"
              />
              <ErrorMessage
                name="searchTerm"
                component="span"
                className={errorText}
              />
            </label>

            <button type="submit" className={btn}>
              Search
            </button>
          </Form>
        );
      }}
    </Formik>
  );
};

export default SearchBar;
