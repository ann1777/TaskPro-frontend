import styled from "styled-components";
import { breakpoints } from "../../styles/breakpoints";

const { tablet } = breakpoints;

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
