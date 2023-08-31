import styled from "styled-components";
import { breakpoints } from "../styles/breakpoints";
import { NavLink } from "react-router-dom";
const { tablet } = breakpoints;

export const ProjectList = styled.ul`
  width: 100%;
  max-height: 126px;
  max-height: 126px;
  padding: 0;
  margin-bottom: 116px;
  z-index: 3;
  overflow: auto;
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    width: 0;
    height: 0;
  }
`;

export const Project = styled.li`
  position: relative;
  margin-bottom: 4px;
  padding: 20px 14px;
  cursor: pointer;
  @media screen and (min-width: tablet) {
    padding: 20px 24px;
    width: 260px;
  }
`;

export const ProjectName = styled.h2`
  margin-right: 43px;
  font-size: 14px;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.28px;
  color: #161616;

  @media screen and (min-width: ${tablet}) {
    margin-right: 43px;
  }
`;

export const ProjectIcon = styled.svg`
  width: 18px;
  height: 18px;
  margin-right: 8px;
  stroke: #161616;
`;
export const PencilIcon = styled.svg`
  margin-right: 8px;
  width: 18px;
  height: 18px;
  fill: white;
  stroke: #16161680;
`;
export const TrashIcon = styled.svg`
  width: 16px;
  height: 16px;
  stroke: #16161680;
  fill: white;
`;

export const ProjectNameWrapper = styled.div`
  max-width: 122px;
  width: 122px;
  margin-right: 9px;
  @media screen and (min-width: ${tablet}) {
    max-width: 122px;
    margin-right: 24px;
  }
`;

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;

  :hover {
    opacity: 1;
    color: #161616;
  }

  &.active {
    opacity: 1;
    color: #161616;

    ::after {
      content: "";
      height: 61px;
      width: 4px;
      right: 0;
      top: 0;
      display: block;
      position: absolute;

      border-radius: 4px 0px 0px 4px;
      background: #bedbb0;
      opacity: 1;
    }
  }
`;
