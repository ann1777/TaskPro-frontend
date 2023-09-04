import styled from "styled-components";
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
  align-items: center;
  padding: 20px;
`;

export const FormField = styled.div`
  margin-bottom: 24px;
  font-size: 16px;
  color: ${({ theme }) => theme.colors.textSecondModal};
  text-align: center;
`;
export const ButtonContainer = styled.div`
  display: flex;
  gap: 50px;
`;
export const SubmitButton = styled(Button)`
  display: flex;
  justify-content: center;
  min-width: 100px;
  align-items: center;
  padding: 14px 0px;
  width: 100%;
  border: none;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.plusBtnColorModal};
  background-color: ${({ theme }) => theme.colors.btnModal};
  border-radius: 8px;
`;

export const CancelButton = styled(Button)`
  min-width: 100px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.plusBtnColorModal};
  background-color: ${({ theme }) => theme.colors.btnModal};
`;

export default {
  TitleHelp,
  StyledForm,
  FormField,
  Button,
  CancelButton,
};
