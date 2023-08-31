import styled from "styled-components";
import { breakpoints } from "../styles/breakpoints";
import Select from "react-select";

const { tablet, desktop } = breakpoints;

export const StyledHeader = styled.header`
  width: 100%;
  padding: 14px 20px;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  box-sizing: border-box;
  flex-shrink: 0;

  background-color: ${(props) => props.theme.backgroundHeader};
  transition: width 225ms cubic-bezier(0.4, 0, 0.6, 1) 0ms,
    margin 225ms cubic-bezier(0.4, 0, 0.6, 1) 0ms;

  @media screen and (min-width: ${tablet}) {
    padding: 18px 32px;
    position: absolute;
    left: 0;
  }

  @media screen and (min-width: ${desktop}) {
    padding: 18px 24px;
    justify-content: end;
    width: calc(100% - 260px);
    right: 0;
  }
`;

export const StyledSelect = styled(Select)`
  font-size: 14px;
  font-weight: 500;
  line-height: 1.2;
  letter-spacing: -0.28px;
  background-color: ${({ theme }) => theme.colors.backgroundHeader};
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
export const UserName = styled.p`
  margin-left: 14px;
  margin-right: 8px;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.5;
  font-size: 14px;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.28px;
  color: ${({ theme }) => theme.colors.textHeader};
`;

export const AvatarImg = styled.img`
  display: block;
  border-radius: 8px;
  width: 32px;
  height: 32px;
`;

export const ButtonBurger = styled.button`
  padding: 0;
  align-self: center;
  width: 24px;
  height: 24px;
  border: none;
  background-color: transparent;
  z-index: 5;

  @media screen and (min-width: ${tablet}) {
    width: 32px;
    height: 32px;
  }
  @media screen and (min-width: ${desktop}) {
    display: none;
  }
`;

export const StyledSvgBurger = styled.svg`
  width: 24px;
  height: 24px;
  fill: ${({ theme }) => theme.colors.textHeader};

  @media screen and (min-width: ${tablet}) {
    width: 32px;
    height: 32px;
  }
`;
