import styled from "styled-components";
import { breakpoints } from "../styles/breakpoints";
import { NavLink } from "react-router-dom";
const { tablet } = breakpoints;

export const ProjectList = styled.ul`
  width: 100%;
  padding: 0;
  z-index: 3;
  overflow: auto;
  flex-grow: 1;
  overflow-y: auto;
  scroll-snap-align: start;
  overscroll-behavior-y: contain;
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    width: 0;
    height: 0;
  }
  .scroll-snap-x {
    scroll-behavior: smooth;
  }
`;

export const Project = styled.li`
  position: relative;
  margin-bottom: 4px;
  cursor: pointer;
  @media screen and (min-width: tablet) {
  }
`;

export const ProjectName = styled.h2`
  margin-right: 43px;
  font-size: 14px;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.28px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  color: ${({ theme }) => theme.colors.secondTextSidebar};
  &.active {
    color: ${({ theme }) => theme.colors.textTitlesSidebar};
  }

  @media screen and (min-width: ${tablet}) {
    margin-right: 43px;
  }
`;

export const ProjectIcon = styled.svg`
  width: 18px;
  height: 18px;
  margin-right: 8px;
  fill: transparent;
  stroke: ${({ theme }) => theme.colors.secondTextSidebar};
  &.active {
    stroke: ${({ theme }) => theme.colors.textTitlesSidebar};
  }
`;
export const IconWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;
export const PencilIcon = styled.svg`
  visibility: hidden;
  margin-right: 8px;
  width: 18px;
  height: 18px;
  fill: transparent;
  stroke: ${({ theme }) => theme.colors.textTitlesSidebar};
`;
export const TrashIcon = styled.svg`
  visibility: hidden;
  width: 16px;
  height: 16px;
  fill: transparent;
  stroke: ${({ theme }) => theme.colors.textTitlesSidebar};
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
  height: 61px;
  padding: 20px 24px;

  :hover {
  }

  &.active {
    background: ${({ theme }) => theme.colors.backgroundActiveSidebar};
    > svg {
      stroke: ${({ theme }) => theme.colors.textTitlesSidebar};
    }
    > div > h2 {
      color: ${({ theme }) => theme.colors.textTitlesSidebar};
    }
    > div > svg {
      visibility: visible;
    }

    ::after {
      content: "";
      height: 61px;
      width: 4px;
      right: 0;
      top: 0;
      display: block;
      position: absolute;
      border-radius: 4px 0px 0px 4px;
      background: ${({ theme }) => theme.colors.btnLogOut};
      opacity: 1;
    }
  }
`;
