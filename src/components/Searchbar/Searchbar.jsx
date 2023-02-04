import PropTypes from 'prop-types';
import css from '../Searchbar/Searchbar.module.css';

export const Searchbar = ({ handleChange, onSubmit, inputValue }) => (
  <header className={css.searchbar}>
    <form className={css.form} onSubmit={onSubmit}>
      <button type="submit" className={css.searchForm__button}>
        <span className={css.searchFormButton__label}>Search</span>
      </button>

      <input
        className={css.searchForm__input}
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search images and photos"
        name="query"
        onChange={handleChange}
        value={inputValue}
      />
    </form>
  </header>
);

Searchbar.propTypes = {
  onSubmit: PropTypes.func,
  handleChange: PropTypes.func,
};
