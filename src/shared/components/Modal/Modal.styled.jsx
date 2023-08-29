import styled from "styled-components";
import { breakpoints } from "../styles/breakpoints";
// import theme from "../../components/styles/theme.styled";

// const selectedTheme = theme[1];

export const StyledOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
`;

export const StyledModal = styled.div`
  /* position: relative; */
  border-radius: 8px;
  background-color: #FCFCFC;
  padding: 24px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;

  @media (max-width: 374px) {
    min-width: 50%;
  }

  @media (min-width: ${breakpoints.mobile}) {
    min-width: 335px;
    max-width: 400px;
  }

  @media (min-width: ${breakpoints.tablet}) {
    min-width: 350px;
    max-width: 400px;
  }

  @media (min-width: ${breakpoints.desktop}) {
    min-width: 350px;
    max-width: 400px;
  }
`;

export const StyledCloseButton = styled.button`
  position: absolute;
  top: 14px;
  right: 14px;
  margin-left: auto;
  cursor: pointer;
  background-color: transparent;
  border: none;
`;

export const Svg = styled.svg`
  stroke: #fff;
`;
