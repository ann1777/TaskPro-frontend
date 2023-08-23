import { Field, Form } from "formik";
import styled from "styled-components";
import { breakpoints } from "../styles/breakpoints";

export const StyledInputAuth = styled(Field)`
  border: none;
  width: 280px;
  border-bottom: 1px solid black;
  padding: 20px 0px;
  background-color: transparent;
  color: black;
  &:-webkit-autofill,
  &:-webkit-autofill:focus {
    transition: background-color 600000s 0s, color 600000s 0s;
  }
  @media screen and (min-width: ${breakpoints.tablet}) {
    width: 240px;
  }
`;

export const StyledFormAuth = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 36px;
  @media screen and (min-width: ${breakpoints.tablet}) {
    align-items: start;
  }
`;

export const StyledBtnAuthAccent = styled.button`
  width: 182px;
  height: 44px;
  border: none;
  font-family: inherit;
  border-radius: 30px;
  font-weight: 700;
  font-size: 14px;
  line-height: 1.21;
  display: flex;
  align-items: center;
  justify-content: center;
  letter-spacing: 0.04em;
  color: black;
  border-color: black;
  background: white;
  border-radius: 30px;
  transition: background-color 250ms linear;
`;
export const StyledLinkAuth = styled.a`
  width: 182px;
  height: 44px;
  border: none;
  font-family: inherit;
  border-radius: 30px;
  font-weight: 700;
  font-size: 14px;
  line-height: 1.21;
  display: flex;
  align-items: center;
  justify-content: center;
  letter-spacing: 0.04em;
  color: black;
  background: black;
  border: 2px solid black;
`;
export const StyledWrapAuthBtn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 24px;
  @media screen and (min-width: ${breakpoints.tablet}) {
    flex-direction: row;
    gap: 32px;
  }
`;
export const StyledWrapInputAuth = styled.div`
  position: relative;
`;
export const StyledLabelAuth = styled.span`
  position: absolute;
  top: 20px;
  left: 0;
  font-weight: 700;
  font-size: 14px;
  line-height: 1.21;
  letter-spacing: 0.04em;
  color: black;
  pointer-events: none;
  transition: all 250ms linear;
`;
export const StyledHeaderAuth = styled.h3`
  font-weight: 700;
  margin-bottom: 40px;
  font-size: 14px;
  text-align: center;
  line-height: 1.21;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: black;
  @media screen and (min-width: ${breakpoints.tablet}) {
    text-align: left;
  }
`;

export const StyledErrorAuth = styled.div`
  position: absolute;
  top: 60px;
  left: 0;
  display: flex;
  gap: 4px;
  align-items: center;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-size: 14px;
  font-weight: 400;
  color: black;
`;

export const AuthWrapComponent = styled.div`
  color: black;
  /* padding-top: 40px; */
  /* @media screen and (min-width: ${breakpoints.tablet}) {
    padding-top: 150px;
  } */
`;
