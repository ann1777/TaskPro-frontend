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
  Overlay,
} from "./Sidebar.styled";
import sprite from "../../images/icons.svg";
import Helper from "../../images/help.png";
// import Helper2 from "../../images/helper2x.png";
// import Helper3 from "../../images/helper3x.png";
import { Logo } from "./Sidebar.styled";
import { BoardList } from "./BoardList";
import { useToggle } from "../../hooks/useToggle.js";
import { useNavigate } from "react-router-dom";
import { signOut } from "../../../redux/auth/operations.js";

export const Sidebar = ({onOpen}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { open, isOpen, toggle } = useToggle();

  const handleLogOut = () => {
    dispatch(signOut());
    navigate("/welcome");
  };

  return (
    <>
      {isOpen && <Overlay onClick={toggle} />}
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

        {/* <ProjectList>
        <ProjectIcon>
          <use href={sprite + "#icon-Project"}></use>
        </ProjectIcon>
        <ProjectText>Project office</ProjectText>
        <PencilIcon>
          <use href={sprite + "#icon-pencil-01"}></use>
        </PencilIcon>
        <TrashIcon>
          <use href={sprite + "#icon-trash-04"}></use>
        </TrashIcon>
      </ProjectList>

      <NeonProjectWrapper>
        <PuzzleIcon>
          <use href={sprite + "#icon-puzzle-piece-02"}></use>
        </PuzzleIcon>
        <NeonText>Neon Light Project</NeonText>
      </NeonProjectWrapper> */}

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

          <HelpBtn type="button">
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
    </>
  );
};
