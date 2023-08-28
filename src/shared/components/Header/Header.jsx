import { useState } from "react";
import sprite from "../../images/header-burger.svg";
import Avatar from "../../images/avatar.png";
import {
  StyledHeader,
  Wrapper,
  AvatarImg,
  StyledSelect,
  UserName,
  StyledSvgBurger,
  ButtonBurger,
 
} from "./Header.styled";
<<<<<<< HEAD
import {useToggle} from "../../hooks/useToggle.js";
=======
import { useDispatch } from "react-redux";
import { changeTheme } from "../../../redux/auth/operations";
>>>>>>> 3178f16b7a20978831cb3f04ed65c1f5391b4f0c

const options = [
  { value: "theme", label: "Theme" },
  { value: "light", label: "Light" },
  { value: "dark", label: "Dark" },
  { value: "violet", label: "Violet" },
];

export const Header = () => {
  // const [isOpenMenu, setIsOpenMenu] = useState(false);
  const {isOpen, open } = useToggle();
  //   const [isUserLogin, setIsUserLogin]=useState(false);
  // const [isSelectedTheme,setIsSelectedTheme]=useState(false);
<<<<<<< HEAD

  // const handleToggleMenu = () => {
  //   setIsOpenMenu(!isOpenMenu);
  // };
=======
  const handleToggleMenu = () => {
    setIsOpenMenu(!isOpenMenu);
  };
  const dispatch = useDispatch();
>>>>>>> 3178f16b7a20978831cb3f04ed65c1f5391b4f0c

  const handleThemeChange = (selectedOption) => {
    dispatch(changeTheme(selectedOption.value));
  };
  const [selectedOption, setSelectedOption] = useState(null);

  return (
    <>
     
      <StyledHeader>
        <ButtonBurger onClick={open}>
          <StyledSvgBurger>
            <use href={sprite + "#icon-burger"}></use>
          </StyledSvgBurger>
        </ButtonBurger>

        <Wrapper>
          <StyledSelect
            defaultValue={selectedOption}
            onChange={handleThemeChange}
            options={options}
          />
          
          <UserName>Name</UserName>
          {/* <img
        src={`${URL}${}`}
        alt={}
      ></img> */}
          <AvatarImg src={Avatar} alt="" />
        </Wrapper>
      </StyledHeader>
    </>
  );
};
