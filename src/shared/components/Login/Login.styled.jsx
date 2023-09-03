import { Field, Form } from "formik";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { breakpoints } from "../styles/breakpoints";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

export const StyledInputAuth = styled(Field)`
  border-radius: 8px;
  border: 1px solid #bedbb0;
  opacity: 0.4;
  margin-bottom: 14px;
  &.no-bottom-padding {
    margin-bottom: 0;
  }
  transition: all 250ms linear;
  background: #1f1f1f;
  box-shadow: 0px 4px 16px 0px rgba(22, 22, 22, 0.08);
  color: #fff;
  width: calc(100vw - 88px);
  padding: 14px 40px 14px 18px;
  opacity: 0.4;
  &::placeholder {
    font-family: "Poppins";
  }
  &:hover,
  &:focus {
    outline: 1px solid #bedbb0;
    opacity: 1;
    transition: outline 250ms linear, opacity 250ms linear;
  }
  @media screen and (min-width: ${breakpoints.tablet}) {
    width: 344px;
  }
`;

export const StyledFormAuth = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (min-width: ${breakpoints.tablet}) {
    align-items: start;
  }
`;

export const StyledBtnAuthAccent = styled.button`
  display: flex;
  width: calc(100vw - 88px);
  padding: 14px 0px;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  border: none;
  background: #bedbb0;
  transition: background-color 250ms linear;
  font-family: Poppins;
  font-size: 14px;
  margin-top: 24px;
  font-weight: 500;
  letter-spacing: -0.28px;
  &:hover,
  &:focus {
    background: #9dc888;
  }
  @media screen and (min-width: ${breakpoints.tablet}) {
    width: 344px;
  }
`;
export const StyledLinkAuth = styled.a`
  width: 182px;
  height: 44px;
  border: none;
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
  @media screen and (min-width: ${breakpoints.tablet}) {
    flex-direction: row;
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
  top: -13px;
  right: 5px;
  font-size: 10px;
  font-weight: 400;
  color: #9dc888;
`;

export const AuthWrapComponent = styled.div`
  padding: 24px;
  background: #151515;
  border-radius: 8px;

  @media screen and (min-width: ${breakpoints.tablet}) {
    width: 424px;
    padding: 40px;
  }
`;

export const LinkList = styled.ul`
  display: flex;
  margin-bottom: 40px;
`;
export const LinkNav = styled.li`
  display: flex;
`;
export const LinkItem = styled(NavLink)`
  color: rgba(255, 255, 255, 0.3);
  font-family: Poppins;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.36px;
  margin-right: 14px;
  transition: all 250ms linear;
  &:hover,
  &.active {
    color: #ffffff;
  }
`;
export const WrapperForm = styled.div`
  padding: 225px 20px;
  display: flex;
  justify-content: center;

  @media screen and (min-width: ${breakpoints.tablet}) {
    padding: 346px 0;
  }
  @media screen and (min-width: ${breakpoints.desktop}) {
    padding: 219px 0;
  }
`;

export const AuthFormPasswordIcon = styled.span`
  position: absolute;
  bottom: 10px;
  right: 18px;
  color: #fff;
  opacity: 0.4;
  cursor: pointer;
`;

export const StyledEyeIcon = styled(AiOutlineEyeInvisible)`
  transition: color 0.3s;
  &:hover,
  &:focus {
    color: #9dc888;
  }
`;

export const StyledEyeIconVis = styled(AiOutlineEye)`
  transition: color 0.3s;
  &:hover,
  &:focus {
    color: #9dc888;
  }
`;
