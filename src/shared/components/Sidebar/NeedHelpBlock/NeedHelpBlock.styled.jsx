import styled from "styled-components";
import { breakpoints } from "../../styles/breakpoints";

const { tablet } = breakpoints;

export const BlockWrapper = styled.div`
  width: 100%;
  margin: 0 14px 24px 14px;
  padding: 14px;
  display: flex;
  flex-direction: column;
  width: 197px;
  height: 238px;
  justify-content: start;
  background-color: #f6f6f7;
  background: ${({ theme }) => theme.colors.backgroundWindowSidebar};

  @media screen and (min-width: ${tablet}) {
    margin: 0 24px 24px 24px;
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
  margin-bottom: 18px;

  @media screen and (min-width: ${tablet}) {
    width: 172px;
  }
`;
export const SupportMessage = styled.p`
  font-size: 12px;
  line-height: 1.33;
  letter-spacing: -0.24px;
  span {
    color: #bedbb0;
  }

  @media screen and (min-width: ${tablet}) {
    font-size: 14px;
    line-height: 1.4;
    letter-spacing: -0.28px;
  }
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
