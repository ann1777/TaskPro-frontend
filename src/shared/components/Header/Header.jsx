import { useState } from "react";
import sprite from "../../images/header-burger.svg";
import Avatar from "../../images/avatar.png";
import { Sidebar } from "../Sidebar/Sidebar";
import {
  StyledHeader,
  Wrapper,
  AvatarImg,
  StyledSelect,
  UserName,
  StyledSvgBurger,
  ButtonBurger,
  Overlay,
} from "./Header.styled";

const options = [
  { value: "theme", label: "Theme" },
  { value: "light", label: "Light" },
  { value: "dark", label: "Dark" },
  { value: "violet", label: "Violet" },
];

export const Header = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  //   const [isUserLogin, setIsUserLogin]=useState(false);
  // const [isSelectedTheme,setIsSelectedTheme]=useState(false);

  const handleToggleMenu = () => {
    setIsOpenMenu(!isOpenMenu);
  };

  const [selectedOption, setSelectedOption] = useState(null);

  return (
    <>

    {isOpenMenu && <Overlay onClick={handleToggleMenu}/>}
   <Sidebar/>
    <StyledHeader>
      <ButtonBurger onClick={handleToggleMenu}>
        <StyledSvgBurger>
          <use href={sprite + "#icon-burger"}></use>
        </StyledSvgBurger>
      </ButtonBurger>

      <Wrapper>
        <StyledSelect
          defaultValue={selectedOption}
          onChange={setSelectedOption}
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
