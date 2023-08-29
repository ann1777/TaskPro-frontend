import styled from "styled-components";
import { breakpoints } from "../styles/breakpoints";

const { tablet, desktop } = breakpoints;

export const StyledSidebar = styled.div`
  display: flex;
  flex-direction: column;
  padding: 14px 14px 24px 14px;
  width: 225px;
  overflow: auto;
  height: 100vh;
  top: 0;
  left: 0;
  z-index: 100;
  transform: translateX(-100%);
  transition: transform 250ms ease-in;
  background: #ffffff;
  webkit-scrollbar {
    width: 4px;
    height: 61px;
    border-radius: 4px 0px 0px 4px;
  }
  ::-webkit-scrollbar-thumb {
    background: #bedbb0;
  }
  overflow: hidden;

  ${(props) =>
    props.isOpen
      ? "transform: translateX(0);"
      : "transform: translateX(-100%);"}

  @media screen and (min-width: ${tablet}) {
    padding: 24px;
    width: 260px;
  }

  @media screen and (min-width: ${desktop}) {
    position: fixed;
    transform: translateX(0);
    transition: none;
  }

  /* top: 0px;
  display: flex;
  flex-direction: column;
  justify-content: start;
  text-align: start;
  height: 100%;
  overflow-y: auto;
  position: fixed;
  inset: 0px;
  transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  z-index: 2;
  webkit-scrollbar {
    width: 4px;
    height: 61px;
    border-radius: 4px 0px 0px 4px;
  }
  ::-webkit-scrollbar-thumb {
    background: #bedbb0;
  }
  overflow: hidden;

  @media screen and (max-width: ${tablet}) {
    left: -225px;
    width: 225px;
    padding: 14px;
  }

  @media screen and (min-width: ${tablet}) {
    left: -260px;
    width: 260px;
    padding: 24px;
  }

  @media screen and (min-width: ${desktop}) {
    left: 0px;
    flex: 1 0 auto;
    z-index: 2;
    outline: 0px;
    box-shadow: none;
    background-color: rgb(255, 255, 255);
    transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    border-right: 1px solid rgba(0, 0, 0, 0.12);
  }

  background-color: #ffffff; */
`;

export const LogoWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  margin-bottom: 70px;

  @media screen and (min-width: ${desktop}) {
    margin-bottom: 60px;
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
  font-size: 12px;
  font-weight: 400;
  line-height: 1.2;
  letter-spacing: -0.24px;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 212px;
  padding: 14px 0;
  margin-bottom: 282px;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid #1616161a;
  border-bottom: 1px solid #1616161a;

  @media screen and (min-width: ${tablet}) {
    width: 197px;
    margin-bottom: 460;
  }
  @media screen and (min-width: ${desktop}) {
    width: 197px;
    margin-bottom: 206px;
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
  padding: 14px;
  display: flex;
  flex-direction: column;
  /* width: 100%; */
  width: 197px;
  height: 238px;
  justify-content: start;
  margin-bottom: 24px;
  background-color: #f6f6f7;

  @media screen and (min-width: ${tablet}) {
    padding: 20px;
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
  /* height: 80px; */
  margin-bottom: 18px;

  @media screen and (min-width: ${tablet}) {
    width: 172px;
    /* height: 102px; */
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
  /* background: #fff; */
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
  /* background: #fff; */
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
  width: 100%;
  height: 100%;
  background: #1515154d;
  z-index: 1;
  @media screen and (min-width: ${desktop}) {
    display:none; 
  }
`;
