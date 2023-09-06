import { useEffect } from 'react';
import icon from '../../images/icons.svg';
import PropTypes from 'prop-types';

import {
  StyledModal,
  StyledOverlay,
  StyledCloseButton,
  Svg,
} from './Modal.styled';

export const Modal = ({ onClose, children }) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeydown);

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeydown);
    };
  });

  const handleKeydown = ({ code }) => {
    if (code === 'Escape') {
      onClose();
    }
  };

  const handleBackdropClick = ({ currentTarget, target }) => {
    if (currentTarget === target) {
      onClose();
    }
  };

  return (
    <StyledOverlay onClick={handleBackdropClick}>
      <StyledModal>
        <StyledCloseButton type='button' onClick={onClose}>
          <Svg width='18' height='18'>
            <use xlinkHref={`${icon}#icon-x-close`} />
          </Svg>
        </StyledCloseButton>
        {children}
        
      </StyledModal>
    </StyledOverlay>
  );
};

Modal.propTypes = {
  onClose: PropTypes.func,
  children: PropTypes.node.isRequired,
};
