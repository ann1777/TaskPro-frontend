import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { breakpoints } from "../styles/breakpoints";

const { tablet, desktop } = breakpoints;

export const NavigationList = styled.ul`
  display: flex;
  gap: 15px;
  align-items: center;
  /* justify-content: center; */
  @media screen and (max-width: 767px) {
    margin-right: -16px;
  }
  @media screen and (min-width: ${tablet}) {
    gap: 45px;
    /* flex-direction: row-reverse; */
  }
`;

export const NavigationItem = styled.li`
  font-style: none;
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;
  letter-spacing: 0.04em;
  color: black;

  @media screen and (min-width: ${tablet}) {
    &:last-child {
      display: flex;
      flex-wrap: nowrap;
      align-items: center;
    }
  } /* &:hover,
  &:focus {
    color: #ffffff;
  }
  &:active {
    color: #ffffff;
  } */
`;

export const NavItem = styled(NavLink)`
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 17px;
  letter-spacing: 0.04em;

  color: black;
`;

export const StyledDiv = styled.div`
  @media screen and (min-width: ${tablet}) {
    flex-grow: 0;
  }
  @media screen and (min-width: ${desktop}) {
    flex-grow: 1;
  }
`;
