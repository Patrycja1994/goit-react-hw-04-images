import { useEffect } from 'react';
import PropTypes from 'prop-types';

import css from '../Modal/Modal.module.css';

export const Modal = ({ onClose, largeImage }) => {
  useEffect(() => {
    const handleKeyDown = event => {
      if (event.code === 'Escape' || event.currentTarget === event.target) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  return (
    <div className={css.overlayModal} onClick={onClose}>
      <div className={css.modal}>
        <img src={largeImage} className={css.largeImage} alt="" />
      </div>
    </div>
  );
};

Modal.propTypes = {
  onClose: PropTypes.func,
  largeImage: PropTypes.string.isRequired,
};
