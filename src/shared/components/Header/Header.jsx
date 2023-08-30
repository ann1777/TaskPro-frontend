import { useState } from "react";
import sprite from "../../images/header-burger.svg";
import {
  StyledHeader,
  Wrapper,
  AvatarImg,
  StyledSelect,
  UserName,
  StyledSvgBurger,
  ButtonBurger,
} from "./Header.styled";
import { useDispatch } from "react-redux";
import { useToggle } from "../../hooks/useToggle.js";
import { changeTheme } from "../../../redux/auth/operations";
import { selectUserTheme } from "../../../redux/auth/authSelectors";
import { useSelector } from "react-redux";
import { selectUser } from "../../../redux/auth/authSelectors";
import { Modal } from "../Modal/Modal";
import { EditProfile } from "../Modal/EditProfile/EditProfile";
import { ThemeSwitcher } from "../Theme/ThemeSwitcher";

const options = [
  { value: "light", label: "Light" },
  { value: "color", label: "Dark" },
  { value: "dark", label: "Violet" },
];

export const Header = ({ onOpenSidebar, openSidebar }) => {
  const { name, avatarURL } = useSelector(selectUser);
  // const [isOpenMenu, setIsOpenMenu] = useState(false);
  const { isOpen, open } = useToggle();

  //   const [isUserLogin, setIsUserLogin]=useState(false);
  // const [isSelectedTheme,setIsSelectedTheme]=useState(false);
  const dispatch = useDispatch();

  const handleThemeChange = (selectedOption) => {
    dispatch(changeTheme(selectedOption.value));
  };
  
  const closeModal = () => {
        setModalOpen(false);
    };
  const [selectedOption] = useState(null);
  const customStyles = {
    option: (defaultStyles) => ({
      ...defaultStyles,
      // color: state.isSelected ? "#212529" : "#fff",
      // borderRadius: "8px",
      // border: "1px solid #BEDBB0",

      // boxShadow: "0px 4px 16px 0px rgba(17, 17, 17, 0.10)",


  // const [selectedOption, setSelectedOption] = useState("");

  return (
    <>
      <StyledHeader>
        <ButtonBurger onClick={openSidebar}>
          <StyledSvgBurger>
            <use href={sprite + "#icon-burger"}></use>
          </StyledSvgBurger>
        </ButtonBurger>
        <Wrapper>
          <ThemeSwitcher />
          <UserName>{name}</UserName>
          <AvatarImg onClick={open} src={avatarURL} alt="user" />
          {isOpen && (
            <Modal onClose={closeModal}>
              <EditProfile />
            </Modal>
          )}
        </Wrapper>
      </StyledHeader>
    </>
  );
};
