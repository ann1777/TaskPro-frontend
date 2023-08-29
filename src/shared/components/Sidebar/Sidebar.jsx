import { useDispatch } from "react-redux";
// import { useState, useEffect } from "react";
import {
  StyledSidebar,
  AppName,
  Title,
  Plus,
  Wrapper,
  CreateBoardButton,
  CreateText,
  LogoWrapper,
  BlockWrapper,
  SupportMessage,
  MessageWrapper,
  HelpBtn,
  HelpIcon,
  LogOutBtn,
  LogOutIcon,
  GreenColor,
  // Overlay,
} from "./Sidebar.styled";
import sprite from "../../images/icons.svg";
import Helper from "../../images/help.png";
// import Helper2 from "../../images/helper2x.png";
// import Helper3 from "../../images/helper3x.png";
import { Logo } from "./Sidebar.styled";
import { BoardList } from "./BoardList";
import { signOut } from "../../../redux/auth/operations.js";

export const Sidebar = ({ isOpen, onOpen, onOpenHelp}) => {
  const dispatch = useDispatch();

  const handleLogOut = () => {
    dispatch(signOut());
  };

  return (
    <>
      {/* <Overlay isOpen={isOpen} onClick={closeSidebar}> */}
      <StyledSidebar isOpen={isOpen}>
        <LogoWrapper>
          <Logo>
            <use href={sprite + "#icon-logo"}></use>
          </Logo>
          <AppName>Task Pro</AppName>
        </LogoWrapper>

        <Title>My boards</Title>

        <Wrapper>
          <CreateText>
            Create a<br></br>new board
          </CreateText>
          <CreateBoardButton onClick={onOpen}>
            <Plus>
              <use href={sprite + "#icon-plus"}></use>
            </Plus>
          </CreateBoardButton>
        </Wrapper>

        <BoardList />

        <BlockWrapper>
          <img src={Helper} style={{ width: "54px", height: "78px" }} alt="/" />

          {/* <BlockImg>
          <source srcSet={Helper} media="(max-width:767px)" />
          <source srcSet={Helper2} media="(max-width:1199px)" />
          <source srcSet={Helper3} media="(min-width:1200px)" /> 
          <img src={Helper} alt="/" />
        </BlockImg> */}

          <MessageWrapper>
            <SupportMessage>
              If you need help with
              <br /> <GreenColor>TaskPro</GreenColor>, check out our
              <br /> support resources or <br /> reach out to our <br />{" "}
              customer support team.
            </SupportMessage>
          </MessageWrapper>

          <HelpBtn type="button" onClick={onOpenHelp}>
            <HelpIcon>
              <use href={sprite + "#icon-help-circle"} />
            </HelpIcon>
            Need help?
          </HelpBtn>
        </BlockWrapper>

        <LogOutBtn type="button" onClick={handleLogOut}>
          <LogOutIcon>
            <use href={sprite + "#icon-login"} />
          </LogOutIcon>
          Log out
        </LogOutBtn>
      </StyledSidebar>
      {/* </Overlay> */}
    </>
  );
};
