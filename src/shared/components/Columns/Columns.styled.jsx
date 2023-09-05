import styled from "styled-components";
import { BsPlus } from "react-icons/bs";

import { breakpoints } from "../styles/breakpoints";
const { tablet, desktop } = breakpoints;

export const UlFull = styled.ul`
display: flex;
gap: 15px;  

 @media screen and (min-width: ${tablet}) {
  
  gap: 18px;  
  }

  @media screen and (min-width: ${desktop}) {
  
  gap: 26px;
  }

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
    transition-property: all;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 150ms;

&:hover, &:active{
  background: ${({ theme }) => theme.colors.hoverBtn};
      transition-property: all;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 150ms;
}
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
     transition-property: all;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 150ms;
&:hover, &:active{
  stroke: ${({ theme }) => theme.colors.hoverBtnSvg};
    transition-property: all;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 150ms;
}

`

export const LiColumn = styled.li`
margin-right: 0px;
width: 350px;`

export const UlCard = styled.ul`

max-height: 478px;
overflow-x: hidden;
overflow-y: auto;
padding-right: 4px;



 @media screen and (min-width: ${tablet}) {
 max-height: 640px;
padding-right: 8px;
  }

  @media screen and (min-width: ${desktop}) {
  max-height: 640px;
  padding-right: 8px;
    }
        
&::-webkit-scrollbar {
  width: 8px; 
  position: absolute;

 
}


&::-webkit-scrollbar-track {
  background-color: ${({ theme }) => theme.colors.scrollbarTrack};
  border: 0px solid transparent; 
  border-radius: 12px; 
}


&::-webkit-scrollbar-thumb {
  background-clip: content-box;
  background-color: ${({ theme }) => theme.colors.scrollbarThumb};
  border: 0px solid transparent;
  border-radius: 12px; 
}
        
        `