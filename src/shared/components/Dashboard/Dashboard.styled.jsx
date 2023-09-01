import styled from "styled-components";
import { BsPlus } from "react-icons/bs";



export const DivFull = styled.div`
padding: 84px 284px;
`


export const DivText = styled.div`
width:486px;
height:72px;
margin: 281px auto 0;
`

export const H1 = styled.h1`
font-family: Poppins;
color: ${({ theme }) => theme.colors.textTitleMain};
font-size: 18px;
font-weight: 500;
letter-spacing: -0.36px;
margin-bottom: 10px;`


export const ButtonAddColumn = styled.button`
border-radius: 8px;
background: ${({ theme }) => theme.colors.btnAddColumn};
display: flex;
    gap: 8px;
padding: 14px 78px 14px 79px;
justify-content: center;
align-items: center;
border: none;

width: 334px;
height: 56px;

font-family: Poppins;
color: ${({ theme }) => theme.colors.btnAccentText};
font-size: 14px;
font-weight: 500;
letter-spacing: -0.28px;
`

export const IconPlus = styled(BsPlus)`
width: 25px;
height: 25px;
background:${({ theme }) => theme.colors.btnAddColumnPlus};
border-radius: 7px;
fill: ${({ theme }) => theme.colors.colorPlusColumn};`


export const DivColumsBtn = styled.div`
display:flex;
gap: 26px;

width: 1132px;
    overflow-x: auto;

            
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