import styled from 'styled-components';
// import theme from '../../styles/theme.styled';
import { Field } from 'formik';
import { Button } from '../../Button/Button';
// const selectedTheme = theme[1];

export const TitleHelp = styled.div`
  ${'' /* color: ${selectedTheme.colors.textColorModal}; */}
  font-size: 18px;
  font-weight: 500;
  line-height: 27px;
  letter-spacing: -0.02em;
  margin-bottom: 24px;
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  ${'' /* background-color: ${selectedTheme.colors.backgroundColorModal}; */}
`;

export const FormField = styled.div`
  margin-bottom: 14px;
  ${'' /* color: ${selectedTheme.colors.textColorModal}; */}
`;

export const InputField = styled(Field)`
  width: 100%;
  padding: 14px 18px;
  background: inherit;
  border-radius: 8px;
  border: 1px solid #BEDBB0;
  outline: none;
  color: #BEDBB0;
  opacity: 0.5;

  &::placeholder {
    color:#BEDBB0;
    font-size: 14px;
    font-weight: 400;
    opacity: 0.5;
  }

  &:hover,
  &:focus {
  opacity: 1;
  &::placeholder {
      opacity: 1;
    }
  }
`;

  

export const SubmitButton = styled(Button)`
  padding: 10px 0 11px 0;
`;

export const BoardText = styled.p`
  font-family: Poppins;
  font-size: 14px;
  font-weight: 400;
  line-height: 21px;
  letter-spacing: -0.02em;
  margin-bottom: 14px;
  color: #ffffff;
  opacity: 0.5;
  margin-top: 24px;
`;
export const RadioField = styled(Field)`
  position: fixed;
  opacity: 0;
  pointer-events: none;

  &:hover ~ .background-label,
  &:checked ~ .background-label {
    outline: 1px solid var(--createBoardInputBorderFocus);
  }

  &:hover ~ .icon-label,
  &:checked ~ .icon-label {
    --color1: var(--createBoardButtonIconFill);
  }
`;
export const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: calc(8 * 32px);
  margin-bottom: 24px;
`;

export const BackgroundIcon = styled.img`
  width: 28px;
  height: 28px;
`;
export const Textarea = styled(Field)`
  height: 120px;
  resize: none;
  width: 100%;
  padding: 14px 18px;
  background: inherit;
  border-radius: 8px;
  border: 1px solid #BEDBB0;
  outline: none;
  color: #BEDBB0;
  opacity: 0.5;

  &::placeholder {
    color:#BEDBB0;
    font-size: 14px;
    font-weight: 400;
    opacity: 0.5;
  }

  &:hover,
  &:focus {
  opacity: 1;
  &::placeholder {
      opacity: 1;
    }
  }
`;

export const LabelTitle = styled.p`
  color: #ffffff;
  opacity: 0.5;
  text-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  font-size: 12px;
  font-family: Poppins;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  margin-top: 24px;
`;

export const Labels = styled.div`
  display: flex;
  gap: 8px;
`;

export const LabelRadiobutton = styled(Field)``;

export const RadioLabel = styled.label`
margin-top: 4px;
  width: 14px;
  height: 14px;
 
  border: 2px solid ${props => props.buttoncolor.color};

  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  & input {
    display: none;
  }

  & input:checked + span {
    width: calc(100% - 4px);
    height: calc(100% - 4px);
  }
`;

export const Checkmark = styled.span`
  width: calc(100%);
  height: calc(100%);
  border-radius: 50%;
  background-color: ${props => props.buttoncolor.color};
  display: inline-block;
  opacity: 1;
  transition: opacity 0.25s ease;
`;


export const IconContainer = styled.div`
  margin-right: 8px;
  cursor: pointer;

  svg {
    fill: #151515;

  }
`;
export const ImageContainer = styled.div`
  margin-right: 4px;
  margin-bottom: 4px;
  cursor: pointer;
`;
export const DedlineTitle = styled.p`
  color:  #FFFFFF;
  opacity: 0.5;
  margin-top: 14px;
  margin-bottom: 4px;
  font-size: 12px;
  font-family: Poppins;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.24px;
`;


export const Svg = styled.svg`
  fill: #151515;
  stroke: rgba(255, 255, 255, 0.5);

  width: 18px;
  height: 18px;
  cursor: pointer;
 &:hover {
    stroke: rgba(255, 255, 255, 1); 
  }
`;
