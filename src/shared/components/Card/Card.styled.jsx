import styled from "styled-components";


export const UlCard = styled.ul`

height: 478px;
    overflow-x: hidden;
overflow-y: auto;
padding-right: 8px;
        
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
width: 334px;
height: 154px;
background: ${({ theme }) => theme.colors.backgroundAll};
border-radius: 8px;
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
`

export const DivDivEdit = styled.div`
display: flex;
justify-content: space-between;
align-items: flex-end;`

export const DivDivEditSvg = styled.div`
display: flex;
gap:8px;`