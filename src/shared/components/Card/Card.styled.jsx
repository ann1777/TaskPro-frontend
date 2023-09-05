import styled from "styled-components";
import { breakpoints } from "../styles/breakpoints";
const { tablet, desktop } = breakpoints;


export const UlCard = styled.ul`

height: 478px;
overflow-x: hidden;
overflow-y: auto;
padding-right: 4px;



 @media screen and (min-width: ${tablet}) {
  height: 100%;
    padding-right: 8px;
    max-height: 650px;
  }

  @media screen and (min-width: ${desktop}) {
    height: 100%;
    padding-right: 8px;
    max-height: 650px;
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



export const LiCard = styled.li`
max-width: 334px;
width: 100%;
height: 154px;
position: relative;
background: ${({ theme }) => theme.colors.backgroundAll};
border-radius: 4px 8px 8px 4px;
border-left: 4px solid ${({ $property, theme }) => ({
    without: theme.colors.colorWithout,
    low: "#8FA1D0",
    medium: "#E09CB5",
    high: "#BEDBB0",
  }[$property])}; 
padding: 14px 20px 14px 24px;
margin-bottom: 8px;
`


export const LiCardH2 = styled.h2`
color: ${({ theme }) => theme.colors.textTitleMain};
font-family: Poppins;
font-size: 14px;
font-style: normal;
font-weight: 600;
line-height: normal;
letter-spacing: -0.28px;
margin-bottom: 8px;`

export const LiCardP = styled.p`

color: ${({ theme }) => theme.colors.textCard};


font-family: Poppins;
font-size: 12px;
font-style: normal;
font-weight: 400;
line-height:133%; 
    height: 38px;
letter-spacing: -0.24px;
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;

    margin-bottom: 14px;


`

export const DivEditBefor = styled.div`

&::before{
    content: "";
    height: 1px;
    width: 100%;
    background-color: ${({ theme }) => theme.colors.borderCard};
    display: inline-block;
     margin-bottom: 14px;
  

}
`

export const DivEditPrioDead = styled.div`
display: flex;
gap:14px;`

export const DivPriority = styled.div`
display:flex;
flex-direction: column;
    text-transform: capitalize;
p{
    color:  ${({ theme }) => theme.colors.textCard};
font-family: Poppins;
font-size: 8px;
font-style: normal;
font-weight: 400;
line-height: normal;
letter-spacing: -0.16px;
}

div{
   color:  ${({ theme }) => theme.colors.textCardNew};
font-family: Poppins;
font-size: 10px;
font-style: normal;
font-weight: 400;
line-height: normal;
letter-spacing: -0.2px;
}

`






export const DivDeadline = styled.div`
display:flex;
flex-direction: column;
    text-transform: capitalize;
p{
    color:  ${({ theme }) => theme.colors.textCard};
font-family: Poppins;
font-size: 8px;
font-style: normal;
font-weight: 400;
line-height: normal;
letter-spacing: -0.16px;
}

div{
    color:  ${({ theme }) => theme.colors.textCardNew};
font-family: Poppins;
font-size: 10px;
font-style: normal;
font-weight: 400;
line-height: normal;
letter-spacing: -0.2px;
}`


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

export const SvgBell = styled.svg`
  width: 16px;
  height: 16px;
  stroke: ${({ theme }) => theme.colors.hoverBtnSvg};
  fill: ${({ theme }) => theme.colors.iconBtnFill};
  filter: drop-shadow(0 0 4px ${({ theme }) => theme.colors.hoverBtnSvg});
`

export const DivDivEdit = styled.div`
display: flex;
justify-content: space-between;
align-items: flex-end;`

export const DivDivEditSvg = styled.div`
display: flex;
gap:8px;
position: relative;
`

export const SvgPriority = styled.svg`
  width: 12px;
  height: 12px;
  fill: ${({ $property, theme }) => ({
    without: theme.colors.colorWithout,
    low: "#8FA1D0",
    medium: "#E09CB5",
    high: "#BEDBB0",
  }[$property])};
`

export const PriorityDiv = styled.div`
      align-items: center;
    display: flex;
    gap: 4px;
`

export const FilterMenu = styled.div`
   position: absolute;
  top: 40px; 
  right: 0;
  background-color: white;
  border: 1px solid #ccc;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  z-index: 100; 
  width: auto;
height: auto;
border-radius: 8px;
border: 1px solid rgba(190, 219, 176, 0.50);
background: #151515;
padding: 18px;
  
`

export const ColumnsDiv = styled.div`
  display: flex;

`