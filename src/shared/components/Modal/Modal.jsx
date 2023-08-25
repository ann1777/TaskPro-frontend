import { useEffect } from 'react';
import icon from '../../images/icons.svg';

import {
  StyledModal,
  StyledOverlay,
  StyledCloseButton,
  Svg,
} from './Modal.styled';


export const Modal = ({ onClose, children }) => {
  useEffect(() => {
    window.addEventListener('keydown', handleKeydown);
    return () => {
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
        <StyledCloseButton type="button" onClick={onClose}>
          <Svg width="18" height="18">
            <use xlinkHref={`${icon}#icon-x-close`} />
          </Svg>
        </StyledCloseButton>
        {children}
      </StyledModal>
    </StyledOverlay>
  );
};