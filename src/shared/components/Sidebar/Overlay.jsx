import styled from "styled-components";
import PropTypes from "prop-types";

export const Overlay = ({ closeSidebar, isOpen }) => {
  return <StyledOverlay onClick={closeSidebar} $isOpen={isOpen}></StyledOverlay>;
};

Overlay.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  closeSidebar: PropTypes.func.isRequired,
};

export const StyledOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(21, 21, 21, 0.3);
  z-index: 1;
  transition: all 250ms;

  ${({ $isOpen }) =>
    $isOpen
      ? "opacity: 1; display:static; pointer-events:auto;"
      : "opacity: 0; pointer-events: none; visibility: hidden;"}
  transition: opacity 1000ms cubic-bezier(0.4, 0, 0.2, 1),
  transform 5000ms cubic-bezier(0.4, 0, 0.2, 1);
`;
