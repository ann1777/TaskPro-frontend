import sprite from '../../images/icons.svg';

import userDesktop1x from '../../images/user-desktop1x.png';
import userDesktop2x from '../../images/user-desktop2x.png';
import userDesktop1xWebp from '../../images/user-desktop1xWebp.webp';
import userDesktop2xWebp from '../../images/user-desktop2xWebp.webp';

import userTablet1x from '../../images/user-tablet1x.png';
import userTablet2x from '../../images/user-tablet2x.png';
import userTablet1xWebp from '../../images/user-tablet1xWebp.webp';
import userTablet2xWebp from '../../images/user-tablet2xWebp.webp';

import userMobile1x from '../../images/user-mobile1x.png';
import userMobile2x from '../../images/user-mobile2x.png';
import userMobile1xWebp from '../../images/user-mobile1xWebp.webp';
import userMobile2xWebp from '../../images/user-mobile2xWebp.webp';
import {
  NotFoundText,
  LogoSvg,
  LogoText,
  LogoWrapper,
  UserPicture,
  NotFoundWrapper,
} from './PageNotFound.styled.jsx';

function PageNotFound() {
  return (
    <>
      <NotFoundWrapper>
        <UserPicture>
          <source
            srcSet={userDesktop2xWebp}
            type='image/webp'
            media='(min-width: 1200px) and (min-resolution: 2dppx)'
          />
          <source
            srcSet={userDesktop1xWebp}
            type='image/webp'
            media='(min-width: 1200px)'
          />
          <source
            srcSet={userTablet2xWebp}
            type='image/webp'
            media='(min-width: 768px) and (min-resolution: 2dppx)'
          />
          <source
            srcSet={userTablet1xWebp}
            type='image/webp'
            media='(min-width: 768px)'
          />
          <source
            srcSet={userMobile2xWebp}
            type='image/webp'
            media='(max-width: 767px) and (min-resolution: 2dppx)'
          />
          <source
            srcSet={userMobile1xWebp}
            type='image/webp'
            media='(max-width: 767px)'
          />
          <source
            srcSet={userDesktop2x}
            media='(min-width: 1200px) and (min-resolution: 2dppx)'
          />
          <source srcSet={userDesktop1x} media='(min-width: 1200px)' />
          <source
            srcSet={userTablet2x}
            media='(min-width: 768px) and (min-resolution: 2dppx)'
          />
          <source srcSet={userTablet1x} media='(min-width: 768px)' />
          <source
            srcSet={userMobile2x}
            media='(max-width: 767px) and (min-resolution: 2dppx)'
          />
          <source srcSet={userMobile1x} media='(max-width: 767px)' />
          <img src={userMobile1x} alt='User' />
        </UserPicture>
        <LogoWrapper>
          <LogoSvg width='40px' height='40px'>
            <use href={sprite + '#icon-logo'}></use>
          </LogoSvg>
          <LogoText>Page Not Found</LogoText>
        </LogoWrapper>
        <NotFoundText>
          Page you are looking for not found. Back to the RegisterPage or
          LoginPage! Or try to access Task Pro later!
        </NotFoundText>
      </NotFoundWrapper>
    </>
  );
}
export default PageNotFound;
