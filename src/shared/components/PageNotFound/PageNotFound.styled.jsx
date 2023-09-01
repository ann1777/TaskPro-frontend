import styled from 'styled-components';
import { breakpoints } from '../styles/breakpoints';

export const NotFoundWrapper = styled.div`
  padding: 211px 20px 0px 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  @media screen and (min-width: ${breakpoints.tablet}) {
    padding: 293px 148px 0px 148px;
  }
  @media screen and (min-width: ${breakpoints.desktop}) {
    padding: 166px 484px 0px 484px;
  }
`;

export const UserPicture = styled.picture`
  width: 124px;
  height: 124px;
  margin-bottom: 14px;
  @media screen and (min-width: ${breakpoints.tablet}) {
    width: 162px;
    height: 162px;
    margin-bottom: 24px;
  }
`;

export const LogoSvg = styled.svg`
  width: 40px;
  height: 40px;
  margin-right: 14px;
  @media screen and (min-width: ${breakpoints.tablet}) {
    width: 48px;
    height: 48px;
  }
`;

export const LogoText = styled.p`
  color: #161616;
  font-size: 28px;
  font-weight: 600;
  letter-spacing: -1.12px;
  @media screen and (min-width: ${breakpoints.tablet}) {
    font-size: 40px;
    font-weight: 600;
    letter-spacing: -1.6px;
  }
`;

export const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  margin-bottom: 24px;
`;

export const NotFoundText = styled.p`
  color: ${(props) => props.theme.secondTextSidebar};
  text-align: center;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.28; /* 128.571% */
  letter-spacing: -0.28px;

  width: calc(100vw - 40px);
  @media screen and (min-width: ${breakpoints.tablet}) {
    width: 473px;
  }
`;
