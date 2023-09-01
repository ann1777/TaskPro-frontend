import styled from "styled-components";
import { breakpoints } from "../../styles/breakpoints";

const { desktop } = breakpoints;

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
  margin:0 24px 24px 24px;
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
