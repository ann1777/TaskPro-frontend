import styled from "styled-components";

export const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 14px 0px;
  width: 100%;
  font-size: var(--fontSize14);
  font-family: var(--fontFamily);
  font-weight: var(--fontWeight500);
  border: none;
  background-color: ${({ theme }) => theme.colors.btnModal};
  border-radius: 8px;
  transition: all 250ms linear;

  &:hover,
  &:focus {
    background-color: ${({ theme }) => theme.colors.btnModalActive};
  }
`;

export const StyledIcon = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  margin-right: 8px;
  background-color: ${({ theme }) => theme.colors.plusBtnColorModal};
  border-radius: 6px;
`;

export const Svg = styled.svg`
  stroke: ${({ theme }) => theme.colors.plusBtnBackgroundModal};
`;
