import styled from "styled-components";
import { Field } from "formik";
import { Button } from "../../Button/Button";

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
  border: 1px solid #bedbb0;
  outline: none;
  color: ${({ theme }) => theme.colors.textColorModal};
  opacity: 0.5;
    background: inherit;
  &::placeholder {
    color:${({ theme }) => theme.colors.textSecondModal};
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