import styled from "styled-components";
import { breakpoints } from "../styles/breakpoints";

const { tablet, desktop } = breakpoints;

export const StyledSidebar = styled.div`
  display: flex;
  flex-direction: column;
  width: 225px;
  overflow: auto;
  height: 100vh;
  top: 0;
  left: 0;
  position: absolute;
  z-index: 100;
  transform: translateX(-100%);
  transition: all 250ms;
  background: ${({ theme }) => theme.colors.backroundSidebar};
  /* overflow-y: hidden;
  overflow-x: hidden; */

  ${(props) =>
    props.isOpen
      ? "transform: translateX(0);"
      : "transform: translateX(-100%);"}

  @media screen and (min-width: ${tablet}) {
    width: 260px;
  }

  @media screen and (min-width: ${desktop}) {
    width: 260px;
    position: fixed;
    transform: translateX(0);
    transition: none;
  }
`;

export const LogoWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  margin: 14px 0px 70px 14px;

  @media screen and (min-width: ${desktop}) {
    margin: 24px 0px 60px 24px;
  }
`;

export const Logo = styled.svg`
  margin-right: 8px;
  width: 32px;
  height: 32px;
  fill: transparent;
  stroke: ${({ theme }) => theme.colors.logoBackground};
`;

export const AppName = styled.h2`
  top: 0;
  font-size: 16px;
  font-weight: 600;
  line-height: 1.2;
  letter-spacing: -0.64px;
  color: ${({ theme }) => theme.colors.textTitlesSidebar};
`;
