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
  fill: #161616;
`;
export const AppName = styled.h2`
  color: #161616;
  top: 0;
  font-family: Poppins;
  font-size: 16px;
  font-weight: 600;
  line-height: 1.2;
  letter-spacing: -0.64px;
`;
export const Title = styled.h2`
  color: #16161680;
  display: block;
  margin-bottom: 8px;
  margin-left: 14px;
  font-size: 12px;
  font-weight: 400;
  line-height: 1.2;
  letter-spacing: -0.24px;

  @media screen and (min-width: ${tablet}) {
    margin-left: 24px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  width: 197px;
  padding: 14px 0;
  margin: 0 14px 40px 14px;
  margin-bottom: 40px;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid #1616161a;
  border-bottom: 1px solid #1616161a;

  @media screen and (min-width: ${tablet}) {
    width: 212px;
    margin: 0 24px 40px 24px;
  }
`;

export const CreateText = styled.h2`
  color: #161616;
  font-size: 14px;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.28px;
`;

export const CreateBoardButton = styled.button`
  width: 40px;
  height: 36px;
  border-radius: 6px;
  padding: 8px 10px;
  display: block;
  border: none;
  cursor: pointer;
  background: #bedbb0;
`;

export const Plus = styled.svg`
  width: 20px;
  height: 20px;
  margin-right: 8px;
  stroke: #121212;
`;

export const BlockWrapper = styled.div`
  width: 100%;
  margin: 0 14px 24px 14px;
  display: flex;
  flex-direction: column;
  width: 197px;
  height: 238px;
  justify-content: start;
  background-color: #f6f6f7;

  @media screen and (min-width: ${tablet}) {
    margin: 0 24px 24px 24px;
    width: 212px;
    height: 272px;
  }
`;

export const BlockImg = styled.img`
  width: 54px;
  height: 78px;
  padding-bottom: 14px;

  @media screen and (min-width: ${tablet}) {
    padding: 20px;
  }
`;

export const MessageWrapper = styled.div`
  text-align: start;
  width: 168px;
  margin-bottom: 18px;

  @media screen and (min-width: ${tablet}) {
    width: 172px;
  }
`;
export const SupportMessage = styled.p`
  font-size: 12px;
  line-height: 1.33;
  letter-spacing: -0.24px;

  @media screen and (min-width: ${tablet}) {
    font-size: 14px;
    line-height: 1.4;
    letter-spacing: -0.28px;
  }
`;
export const GreenColor = styled.span`
  color: #bedbb0;
`;

export const HelpBtn = styled.button`
  display: flex;
  justify-content: start;
  align-items: center;
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-size: 12px;
  font-weight: 500;
  line-height: 1.2;
  letter-spacing: -0.24px;
  color: #161616;
`;

export const HelpIcon = styled.svg`
  width: 20px;
  height: 20px;
  margin-right: 8px;
  fill: transparent;
  stroke: #161616;
`;

export const LogOutBtn = styled.button`
  display: flex;
  justify-content: start;
  align-items: center;
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.2;
  color: #161616;
  @media screen and (min-width: ${desktop}) {
    font-size: 16px;
  }
`;

export const LogOutIcon = styled.svg`
  width: 32px;
  height: 32px;
  margin-right: 14px;
  fill: transparent;
  stroke: #bedbb0;
`;

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(21, 21, 21, 0.3);
  z-index: 1;
  transition: all 250ms;

  ${(props) =>
    props.isOpen
      ? "opacity: 1; display:static;"
      : "opacity: 0; pointer-events: none;visibility: hidden;"} /* transition: opacity 3000ms cubic-bezier(0.4, 0, 0.2, 1)
    opacity-transform 5000ms cubic-bezier(0.4, 0, 0.2, 1); */
    /* transition: opacity 1000ms cubic-bezier(0.4, 0, 0.2, 1),
    opacity-transform 5000ms cubic-bezier(0.4, 0, 0.2, 1); */
    transition: opacity 1000ms cubic-bezier(0.4, 0, 0.2, 1),
  transform 5000ms cubic-bezier(0.4, 0, 0.2, 1);
`;


