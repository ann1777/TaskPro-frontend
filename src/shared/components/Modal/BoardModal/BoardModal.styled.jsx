import styled from "styled-components";
import { Field } from "formik";
import { Button } from "../../Button/Button";
// import { breakpoints } from "../styles/breakpoints";

// const { tablet, desktop } = breakpoints;

export const TitleHelp = styled.div`
  color: ${({ theme }) => theme.colors.textColorModal};

  font-size: 18px;
  font-weight: 500;
  line-height: 27px;
  letter-spacing: -0.02em;
  margin-bottom: 24px;
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
`;

export const FormField = styled.div`
  margin-bottom: 24px;
`;

export const InputField = styled(Field)`
  width: 100%;
  padding: 14px 18px;
  background: inherit;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.colors.inputModal};
  outline: none;
  color: ${({ theme }) => theme.colors.textColorModal};
  /* opacity: 0.5; */
  background: inherit;
  transition: all 250ms linear;
  transition: opacity 0.2s ease-in-out, stroke 0.2s ease-in-out;
  &::placeholder {
    font-family: Poppins;
    color: ${({ theme }) => theme.colors.textSecondModal};
    font-size: 14px;
    font-weight: 400;
    opacity: 0.5;
  }
  &:hover,
  &:focus {
    opacity: 1;
    border: 1px solid ${({ theme }) => theme.colors.inputModalActive};
    &::placeholder {
      opacity: 1;
    }
  }
`;

export const SubmitButton = styled(Button)`
  padding: 10px 0 11px 0;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.plusBtnColorModal};
`;

export const BoardText = styled.p`
  font-family: Poppins;
  font-size: 14px;
  font-weight: 500;
  line-height: 21px;
  letter-spacing: -0.02em;
  margin-bottom: 14px;
  color: ${({ theme }) => theme.colors.textColorModal};
`;

export const RadioLabel = styled.label`
  position: relative;
  display: inline-block;
  cursor: pointer;
  /* margin-right: 4px; */
`;

export const IconContainer = styled.div`
  position: relative;
  cursor: pointer;

  svg {
    fill: #151515;

    opacity: ${(props) => (props.isSelected ? 1 : 0.5)};
    stroke: ${(props) =>
      props.isSelected ? "rgba(255, 255, 255, 1)" : "rgba(255, 255, 255, 0.5)"};
  }
`;

export const RadioField = styled(Field)`
  position: absolute;
  opacity: 0;
  pointer-events: none;
  transition: all 250ms linear;
  transition: opacity 0.2s ease-in-out, stroke 0.2s ease-in-out;
  &:focus + ${IconContainer} svg,
  &:hover + ${IconContainer} svg {
    opacity: 1;
    stroke: rgba(255, 255, 255, 1);
  }
`;

export const Svg = styled.svg`
  width: 18px;
  height: 18px;
  cursor: pointer;
  stroke: rgba(255, 255, 255, 0.5);
  transition: opacity 0.2s ease-in-out, stroke 0.2s ease-in-out;
  transition: all 250ms linear;
  &:hover {
    stroke: rgba(255, 255, 255, 1);
    opacity: 1;
  }
`;

export const BackgroundIcon = styled.img`
  width: 28px;
  height: 28px;
  border-radius: 8px;
  border: ${({ isSelected, theme }) =>
    isSelected ? `2px solid ${theme.colors.btnModalActive}` : "none"};
  box-sizing: border-box;
`;

export const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 24px;
  gap: 8px;
`;

export const RowBack = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 256px;
  margin-bottom: 24px;
  gap: 4px;
`;
