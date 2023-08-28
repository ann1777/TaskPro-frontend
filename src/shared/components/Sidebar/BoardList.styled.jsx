import styled from "styled-components";
import { breakpoints } from "../styles/breakpoints";

const { tablet } = breakpoints;

export const ProjectList = styled.div`
  outline: 2px solid black;
  position: absolute;
  width: 225px;
  width: 100%;
  height: 126px;
  max-height: 126px;
  padding: 0;
  margin-bottom: 40px;
  z-index: 3;
  left: 50%;
  transform: translate(-50%, calc(200%));
  /* top: -100%; */
  /* transform: translateY(100%); */
  /* overflow-y: scroll;
  scroll-behavior: auto; */
  @media screen and (min-width: tablet) {
    width: 260px;
  }

  /* ::-webkit-scrollbar {
    width: 0;
  } */
`;

export const Project = styled.li`
  display: flex;
  flex-direction: row;
  width: 100%;
  padding: 20px 14px;
  justify-content: start;
  align-items: center;

  @media screen and (min-width: tablet) {
    padding: 20px 24px;
  }
`;

export const ProjectName = styled.h2`
  margin-right: 43px;
  font-size: 14px;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.28px;
  color: #161616;

  @media screen and (min-width: ${tablet}) {
    margin-right: 43px;
  }
`;

export const ProjectIcon = styled.svg`
  width: 18px;
  height: 18px;
  margin-right: 8px;
  stroke: #161616;
`;
export const PencilIcon = styled.svg`
  margin-right: 8px;
  width: 18px;
  height: 18px;
  /* fill: #16161680; */
  stroke: #16161680;
`;
export const TrashIcon = styled.svg`
  width: 16px;
  height: 16px;
  stroke: #16161680;
  fill: #16161680;
`;

export const PuzzleIcon = styled.svg`
  width: 18px;
  height: 18px;
  margin-right: 8px;
  fill: #16161680;
`;

// export const NeonProjectWrapper = styled.div`
//   display: flex;
//   flex-direction: row;
//   width: 100%;
//   padding: 20px 0;
//   justify-content: start;
//   align-items: center;
//   margin-bottom: 116px;
//   @media screen and (min-width: ${tablet}) {
//     margin-bottom: 40px;
//   }
// `;
// export const NeonText = styled.h2`
//   color: rgba(22, 22, 22, 0.5);
//   font-size: 14px;
//   font-weight: 500;
//   line-height: normal;
//   letter-spacing: -0.28px;
// `;
