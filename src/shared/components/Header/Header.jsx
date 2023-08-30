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
import { selectUser } from '../../../redux/auth/authSelectors';
import { Modal } from '../Modal/Modal';
import { EditProfile } from '../Modal/EditProfile/EditProfile';
import { ThemeSwitcher } from '../Theme/ThemeSwitcher';
import { useState } from 'react';

export const Header = ({ openSidebar }) => {
  const { name, avatarURL } = useSelector(selectUser);
  


  
  const [isModalOpen, setModalOpen] = useState(false);

  const handleModalOpen = () => {
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setModalOpen(false);
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
        <AvatarImg onClick={handleModalOpen} src={avatarURL} alt='user' />
        {isModalOpen && <Modal onClose={handleModalClose}>
       
          <EditProfile onCloseModal={handleModalClose} />
        </Modal>
     
      }

      </Wrapper>
    </StyledHeader>
  );
};
