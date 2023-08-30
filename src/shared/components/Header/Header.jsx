import sprite from '../../images/header-burger.svg';
import {
  StyledHeader,
  Wrapper,
  AvatarImg,
  UserName,
  StyledSvgBurger,
  ButtonBurger,
} from './Header.styled';
import { useSelector } from 'react-redux';
import { useToggle } from '../../hooks/useToggle.js';
import { selectUser } from '../../../redux/auth/authSelectors';
import { Modal } from '../Modal/Modal';
import { EditProfile } from '../Modal/EditProfile/EditProfile';
import { ThemeSwitcher } from '../Theme/ThemeSwitcher';

export const Header = ({ openSidebar }) => {
  const { name, avatarURL } = useSelector(selectUser);
  const { isOpen, open } = useToggle();

  const closeModal = () => {
    open(false);
  };

  return (
    <StyledHeader>
      <ButtonBurger onClick={openSidebar}>
        <StyledSvgBurger>
          <use href={sprite + '#icon-burger'}></use>
        </StyledSvgBurger>
      </ButtonBurger>
      <Wrapper>
        <ThemeSwitcher />
        <UserName>{name}</UserName>
        <AvatarImg onClick={open} src={avatarURL} alt='user' />
        {isOpen && (
          <Modal onClose={closeModal}>
            <EditProfile />
          </Modal>
        )}
      </Wrapper>
    </StyledHeader>
  );
};
