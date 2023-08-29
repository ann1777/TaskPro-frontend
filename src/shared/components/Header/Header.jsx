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

const options = [
  { value: "light", label: "Light" },
  { value: "color", label: "Dark" },
  { value: "dark", label: "Violet" },
];

export const Header = ({ onOpenSidebar, openSidebar }) => {
  const { name, avatarURL } = useSelector(selectUser);
  // const [isOpenMenu, setIsOpenMenu] = useState(false);
  const { isOpen, open } = useToggle();
  const activeUserTheme = useSelector(selectUserTheme);
  //   const [isUserLogin, setIsUserLogin]=useState(false);
  // const [isSelectedTheme,setIsSelectedTheme]=useState(false);
  const dispatch = useDispatch();

  const handleThemeChange = (selectedOption) => {
    dispatch(changeTheme(selectedOption.value));
  };
  const [selectedOption] = useState(null);
  const customStyles = {
    option: (defaultStyles) => ({
      ...defaultStyles,
      // color: state.isSelected ? "#212529" : "#fff",
      // borderRadius: "8px",
      // border: "1px solid #BEDBB0",

      // boxShadow: "0px 4px 16px 0px rgba(17, 17, 17, 0.10)",

      // backgroundColor: state.isSelected ? "#a0a0a0" : "#212529",
      // borderRadius: "8px",
      // border: "1px solid #BEDBB0",
      // padding: "0px",
      cursor: "pointer",
      margin: "0px",
      color:
        activeUserTheme === "color"
          ? "rgba(255, 255, 255, 0.8)"
          : "rgba(22, 22, 22, 0.80)",
      backgroundColor: activeUserTheme === "color" ? "#161616" : "#FCFCFC",
    }),

    indicatorSeparator: (defaultStyles) => ({
      ...defaultStyles,
      display: "none",
    }),
    menu: (defaultStyles) => ({
      ...defaultStyles,
      cursor: "pointer",
      borderRadius: "8px",
      padding: "0px",
      margin: "0px",
      border: "1px solid #BEDBB0",
    }),
    dropdownIndicator: (defaultStyles) => ({
      ...defaultStyles,
      cursor: "pointer",
      color:
        activeUserTheme === "color"
          ? "rgba(255, 255, 255, 0.8)"
          : "rgba(22, 22, 22, 0.80)",
    }),
    control: (defaultStyles) => ({
      ...defaultStyles,
      cursor: "pointer",
      backgroundColor: "transparent",
      padding: "0px",
      border: "none",
      boxShadow: "none",
    }),
    singleValue: (defaultStyles) => ({
      ...defaultStyles,
      cursor: "pointer",
      color:
        activeUserTheme === "color"
          ? "rgba(255, 255, 255, 0.8)"
          : "rgba(22, 22, 22, 0.80)",
    }),
  };
  return (
    <>
      <StyledHeader>
        <ButtonBurger onClick={openSidebar}>
          <StyledSvgBurger>
            <use href={sprite + "#icon-burger"}></use>
          </StyledSvgBurger>
        </ButtonBurger>

        <Wrapper>
          <StyledSelect
            defaultValue={selectedOption}
            onChange={handleThemeChange}
            options={options}
            styles={customStyles}
          />

          <UserName>{name}</UserName>
          <AvatarImg onClick={open} src={avatarURL} alt="user" />
          {isOpen && (
            <Modal>
              <EditProfile />
            </Modal>
          )}
        </Wrapper>
      </StyledHeader>
    </>
  );
};
