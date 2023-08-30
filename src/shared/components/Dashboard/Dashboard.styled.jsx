import styled from "styled-components";
import { BsPlus } from "react-icons/bs";



export const DivFull = styled.div`
padding: 10px 24px;
`


export const DivText = styled.div`
width:486px;
height:72px;
margin: 281px auto 0;
`

export const H1 = styled.h1`
font-family: Poppins;
color: ${({ theme }) => theme.colors.textHeader};
font-size: 18px;
font-weight: 500;
letter-spacing: -0.36px;`


export const ButtonAddColumn = styled.button`
border-radius: 8px;
background: #FFF;
display: flex;
    gap: 8px;
padding: 14px 78px 14px 79px;
justify-content: center;
align-items: center;
border: none;
margin-top: 10px;

font-family: Poppins;
color: ${({ theme }) => theme.colors.textHeader};
font-size: 14px;
font-weight: 500;
letter-spacing: -0.28px;
`

export const IconPlus = styled(BsPlus)`
width: 25px;
height: 25px;
background:#161616;
border-radius: 7px;
    fill: #ffffff;
  
    
   `
