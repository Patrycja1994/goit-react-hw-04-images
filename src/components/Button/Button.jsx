import PropTypes from 'prop-types';
import css from '../Button/Button.module.css';

export const Button = ({ onClick }) => (
  <button type="button" className={css.button} onClick={onClick}>
    Load more
  </button>
);

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};
