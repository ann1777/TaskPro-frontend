import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { breakpoints } from "../styles/breakpoints";

const { tablet, desktop } = breakpoints;

export const NavItemLogIn = styled(NavLink)`
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  letter-spacing: -0.28px;

  color: #161616;
  font-style: normal;

  font-weight: 500;
  font-size: 14px;
  letter-spacing: -0.28px;
  transition: all 250ms linear;

  color: #161616;
  &:hover,
  &:focus {
    opacity: 0.8;
    transition: opacity 250ms linear;
  }

  @media screen and (min-width: ${tablet}) {
    &:last-child {
      display: flex;
      flex-wrap: nowrap;
      align-items: center;
    }
  }
`;
export const NavItemRegistration = styled(NavLink)`
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  letter-spacing: -0.28px;

  color: #fff;
  font-style: normal;
  padding: 14px;
  background-color: #161616;
  font-weight: 500;
  font-size: 14px;
  letter-spacing: -0.28px;
  border-radius: 8px;
  color: #fff;
  width: calc(100vw - 40px);
  display: flex;
  justify-content: center;
  margin-bottom: 14px;
  text-align: center;
  cursor: pointer;
  transition: all 250ms linear;
  &:hover,
  &:focus {
    opacity: 0.8;
    transition: opacity 250ms linear;
  }

  @media screen and (min-width: ${tablet}) {
    width: 344px;
  }
`;
export const NavItemHome = styled(NavLink)`
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  letter-spacing: -0.28px;

  color: #fff;
  font-style: normal;
  padding: 14px;
  background-color: #161616;
  font-weight: 500;
  font-size: 14px;
  letter-spacing: -0.28px;
  border-radius: 8px;
  color: #fff;
  width: calc(100vw - 40px);
  display: flex;
  justify-content: center;
  margin-bottom: 14px;
  text-align: center;
  cursor: pointer;
  transition: all 250ms linear;
  &:hover,
  &:focus {
    opacity: 0.8;
    transition: opacity 250ms linear;
  }

  @media screen and (min-width: ${tablet}) {
    width: 344px;
  }
`;

export const StyledNav = styled.nav`
  margin-top: 48px;
  display: flex;
  align-items: center;
  flex-direction: column;
  @media screen and (min-width: ${tablet}) {
    flex-grow: 0;
  }
  @media screen and (min-width: ${desktop}) {
    flex-grow: 1;
  }
`;
