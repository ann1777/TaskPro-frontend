import styled from 'styled-components';
import { breakpoints } from '../../styles/breakpoints';
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

export const WindowContaier = styled.div`
  background-color: var(--profileBgColor);
  border-radius: 8px;
  box-shadow: 0px 4px 16px 0px rgba(22, 22, 22, 0.05);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const SendButton = styled.button`
  display: flex;
  width: 100%;
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
`;

export const ModalTitle = styled.h2`
  font-size: 18px;
  font-weight: 500;
  color: #FFF;
  margin-bottom: 24px;
  align-self: flex-start;
`;

export const AvatarWrapper = styled.div`
  width: 68px;
  height: 68px;
  position: relative;
  margin-bottom: 25px;
`;

export const AvatarImg = styled.img`
  width: 68px;
  height: 68px;
  border-radius: 10px;
`;

export const FileInputWrapper = styled.label`
  display: inline-block;
  position: absolute;
  bottom: -12px;
  left: 50%;
  transform: translateX(-50%);
  width: 24px;
  height: 24px;
  border-radius: 20%;
  background-color: white;
  font-size: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const FileInput = styled.input`
  display: none;
`;

export const ProfileForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 14px;
`;

export const ProfileInput = styled.input`
  height: 49px;
  width: 100%;
  border-radius: 8px;
  border: 1px solid #FFF;
  background-color: transparent;
  color: #FFF;
  font-size: 14px;
  font-weight: 400;
  padding: 14px 0px 14px 18px;
  outline: none;
  opacity: 0.5;
  margin-top: 14px;
  &:focus {
    opacity: 1;
  }
  
  @media screen and (min-width: ${breakpoints.M}) {
    width: 352px;
  }
`;

export const StyledEyeIcon = styled(AiOutlineEyeInvisible)`
  transition: color 0.3s;
  width: 18px;
  height: 18px;

  &:hover,
  &:focus {
    color: #9dc888;
  }
`;

export const StyledEyeIconVis = styled(AiOutlineEye)`
  transition: color 0.3s;
  color:#9dc888;
  width: 18px;
  height: 18px;
 
  &:hover,
  &:focus {
    color: #9dc888;
  }
`;