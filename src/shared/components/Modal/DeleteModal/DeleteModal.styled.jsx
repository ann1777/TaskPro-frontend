import styled from 'styled-components';
import { Button } from '../../Button/Button';

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
  align-items: center; 
  padding: 20px;
`;

export const FormField = styled.div`
  margin-bottom: 24px;
  font-size: 16px;
  color: ${({ theme }) => theme.colors.textSecondModal};
  text-align: center; 
`;

export const SubmitButton = styled(Button)`
  padding: 10px 0 11px 0;
  margin: 0 10px; 
`;

export const CancelButton = styled(SubmitButton)`
  background-color: #ccc;
`;

export default {
  TitleHelp,
  StyledForm,
  FormField,
  SubmitButton,
  CancelButton
};