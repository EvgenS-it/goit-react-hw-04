import css from './SearchBar.module.css';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import toast from 'react-hot-toast';

// for Formik
const INITIAL_VALUES = {
  searchTerm: '',
};

const SearchBar = ({ onSearch }) => {
  const { form, input, btn, errorText } = css;

  const handleSubmit = values => {
    if (values.searchTerm.trim().length === 0) {
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
          <header>
            <Form className={form}>
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

              <button type="submit" className={btn}>
                Search
              </button>
            </Form>
          </header>
        );
      }}
    </Formik>
  );
};

export default SearchBar;
