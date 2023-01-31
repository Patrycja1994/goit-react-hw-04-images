
import PropTypes from 'prop-types';
import css from '../Searchbar/Searchbar.module.css'

export const Searchbar = ({ handleChange, handleOnSubmit, inputValue }) => {
    return(
        <header className= {css.searchbar}>
        <form className={css.form} onSubmit={handleOnSubmit}>
            <button type="submit" className={css.searchForm__button}>
            <span className={css.searchFormButton__label}>Search</span>
            </button>

            <input
            className = {css.searchForm__input}
            type="text"
            autocomplete="off"
            autofocus
            placeholder="Search images and photos"
            name='search'
            onChange={handleChange}
            value={inputValue}
            />
        </form>
        </header> 
    )
};



Searchbar.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    handleChange: PropTypes.func.isRequired,
    handleOnSubmit: PropTypes.func.isRequired,
};
