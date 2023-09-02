import styled from "styled-components";
import { BsPlus } from "react-icons/bs";



export const UlFull = styled.ul`
display: flex;
gap: 34px;
`
export const DivTitleColumn = styled.div`
display: flex;
padding: 18px 20px 17px 20px;
justify-content: center;
align-items: center;
justify-content: space-between;
border-radius: 8px;
background:  ${({ theme }) => theme.colors.backgroundAll};
width: 334px;
height: 56px;
margin-bottom: 14px;
`

export const DivTitleColumnText = styled.div`
color: ${({ theme }) => theme.colors.textTitleMain};
font-family: Poppins;
font-size: 14px;
font-weight: 500;
letter-spacing: -0.28px;
`

export const DivTitleColumnBtn = styled.div`
display: flex;
gap: 8px;
`


export const ButtonAddCard = styled.button`
border-radius: 8px;
background: ${({ theme }) => theme.colors.btnAdd};
display: flex;
    gap: 8px;
padding: 14px 88px 14px 89px;
justify-content: center;
align-items: center;
border: none;
width: 334px;
height: 56px;

font-family: Poppins;
color: ${({ theme }) => theme.colors.btnAddColumn};
font-size: 14px;
font-weight: 500;
letter-spacing: -0.28px;
margin: 14px 0px 16px 0px;
`

export const IconPlus = styled(BsPlus)`
width: 25px;
height: 25px;
background:${({ theme }) => theme.colors.btnAddCardPlus};
border-radius: 7px;
fill: ${({ theme }) => theme.colors.colorPlus};`


export const LiCard = styled.li`
width: 334px;
height: 154px;
background: ${({ theme }) => theme.colors.backgroundAll};
border-radius: 8px;
padding: 14px 20px 14px 24px;

`

export const SvgAll = styled.svg`
width: 16px;
height: 16px;
cursor: pointer;
  stroke: ${({ theme }) => theme.colors.iconBtnStroke};
  fill: ${({ theme }) => theme.colors.iconBtnFill};
`

export const LiColumn = styled.li`
margin-right: 0px;`

