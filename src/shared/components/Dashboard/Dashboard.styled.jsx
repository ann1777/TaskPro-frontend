import styled, { css } from "styled-components";
import { BsPlus } from "react-icons/bs";

import { breakpoints } from "../styles/breakpoints";
const { tablet, desktop } = breakpoints;

export const DivFull = styled.div`
padding: 14px 20px 0  20px;
background: url(${props => props.imgurl}) no-repeat center center;
background-size: cover;
    height: 100vh;
   


 @media screen and (min-width: ${tablet}) {
     padding: 94px 32px 0  32px;
       height: 100vh;
  }

  @media screen and (min-width: ${desktop}) {
  padding: 84px 19px 0  284px;
    width: 100%;
    height: 100vh;
  }

`


export const DivText = styled.div`
max-width:486px;
width: 100%;
height:72px;
margin: 281px auto 0;
color: ${({ theme }) => theme.colors.textCard};
`

export const H1 = styled.h1`
font-family: Poppins;
color: ${({ theme }) => theme.colors.textTitleMain};
font-size: 18px;
font-weight: 500;
letter-spacing: -0.36px;
 margin-bottom: 39px;
 background: ${({ theme }) => theme.colors.backgroundAll};
    border-radius: 8px 8px 8px 8px;
    padding: 10px 15px;

@media screen and (min-width: ${tablet}) {
  
  margin-bottom: 26px;
  }

  @media screen and (min-width: ${desktop}) {
  
  margin-bottom: 10px;
  }
`


export const ButtonAddColumn = styled.button`
border-radius: 8px;
background: ${({ theme }) => theme.colors.btnAddColumn};
display: flex;
    gap: 8px;
    padding: 14px 48px 14px 42px;
justify-content: center;
align-items: center;
border: none;

max-width: 334px;

height: 56px;

font-family: Poppins;
color: ${({ theme }) => theme.colors.btnAccentText};
font-size: 14px;
font-weight: 500;
letter-spacing: -0.28px;


@media screen and (min-width: 375px) {

    padding: 14px 79px;
  
}

     @media screen and (min-width: ${tablet}) {
      padding: 14px 78px 14px 79px;

  }

  @media screen and (min-width: ${desktop}) {

  }
`

export const IconPlus = styled(BsPlus)`
width: 25px;
height: 25px;
background:${({ theme }) => theme.colors.btnAddColumnPlus};
border-radius: 7px;
fill: ${({ theme }) => theme.colors.colorPlusColumn};`


export const DivColumns = styled.div`
display:flex;

max-width: 347px;
width: 100%;
margin: 0 auto;
    overflow-x: auto;




@media screen and (min-width: ${tablet}) {
  max-width: 702px;
  width: 100%;
  /* gap: 26px; */
  height: 80vh;
  }

  @media screen and (min-width: ${desktop}) {
  max-width: 1617px;
    width: 100vw;
  }
            
&::-webkit-scrollbar {
  width: 12px; 
 
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
export const FilterDiv = styled.div`
  display: flex;
    justify-content: space-between;
    position: relative;
    width: 100%;
    
`

export const FilterBtn = styled.button`
 display: flex;
  height:20px;
    background-color: transparent;
    border: none;
    font-size: 14px;
    font-weight: 500;
    letter-spacing: -0.28px;
    gap: 8px;
    align-items: center;
    background: ${({ theme }) => theme.colors.backgroundAll};
    border-radius: 8px 8px 8px 8px;
    padding: 21px;
`

export const FilterSvg = styled.svg`
  width: 16px;
height: 16px;
fill: none;
stroke: #FFFFFFCC;
margin-right: 8px;


`

export const FilterMenu = styled.div`
   position: absolute;
  top: 40px; 
  right: 0;
  background-color: white;
  border: 1px solid #ccc;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  z-index: 100; 
  width: 300px;
height: 234px;
border-radius: 8px;
border: 1px solid rgba(190, 219, 176, 0.50);
background: ${({ theme }) => theme.colors.filterBack};
padding: 24px;

  
`

export const StyledCloseButton = styled.button`
  position: absolute;
  top: 14px;
  right: 14px;
  margin-left: auto;
  cursor: pointer;
  background-color: transparent;
  border: none;
`;

export const Svg = styled.svg`
  width: 16px;
height: 16px;
cursor: pointer;
  stroke: ${({ theme }) => theme.colors.filterText};
  fill: ${({ theme }) => theme.colors.iconBtnFill};
`;

export const FilterLi = styled.li`
cursor: pointer;
color: ${({ theme }) => theme.colors.textCard};
font-family: Poppins;
font-size: 12px;
font-style: normal;
font-weight: 400;
line-height: normal;
letter-spacing: -0.24px;
margin-bottom: 8px;



display: flex;
    align-items: center;
    gap: 8px;
`

export const FilterTitleBtn = styled.p`
color: ${({ theme }) => theme.colors.filterText};
font-family: Poppins;
font-size: 14px;
font-style: normal;
font-weight: 500;
line-height: normal;
letter-spacing: -0.28px;
`

export const FilterTitle = styled.p`
color: ${({ theme }) => theme.colors.textTitleMain};
font-family: Poppins;
font-size: 18px;
font-style: normal;
font-weight: 500;
line-height: normal;
letter-spacing: -0.36px;

&::after{
  content: "";
  height: 1px;
  width: 100%;
background-color: ${({ theme }) => theme.colors.borderCard};
    display: inline-block;
}

`
export const FilterDivLabel = styled.div`
display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 14px;
    `

export const FilterLabel = styled.p`
color: ${({ theme }) => theme.colors.textTitleMain};
font-family: Poppins;
font-size: 14px;
font-style: normal;
font-weight: 500;
line-height: normal;
letter-spacing: -0.28px;`


export const FilterLabelBtn = styled.button`
color: ${({ theme }) => theme.colors.textCard};
font-family: Poppins;
font-size: 12px;
font-style: normal;
font-weight: 400;
line-height: normal;
letter-spacing: -0.24px;
text-decoration-line: underline;
    background: transparent;
    border: 0;`


export const SvgPriority = styled.svg`
  width: 14px;
  height: 14px;
  fill: ${props => props.color};
  
  ${(props) =>
    props.active &&
    css`
     outline: 2px solid;
    border-radius: 50%;
    outline-offset: 1px; 
        padding: 1px;
   
    
    `}
  `




export const SvgPriorityW = styled.svg`
  width: 14px;
  height: 14px;
  fill: ${({ theme }) => theme.colors.colorWithout};
  
  ${(props) =>
    props.active &&
    css`
     outline: 2px solid ${({ theme }) => theme.colors.colorWithout};
    border-radius: 50%;
    outline-offset: 1px; 
        padding: 1px;
   
    
    `}
  `

export const UlFull = styled.ul`
display: flex;
/* gap: 15px;  

 @media screen and (min-width: ${tablet}) {
  
  gap: 18px;  
  }

  @media screen and (min-width: ${desktop}) {
  
  gap: 26px;
  } */

`

export const AddColumnText = styled.p`
 width: 141px;
 `