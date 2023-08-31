import { useDispatch } from "react-redux";
import PropTypes from "prop-types";
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
import { Logo } from "./Sidebar.styled";
import { BoardList } from "./BoardList";
import { signOut } from "../../../redux/auth/operations.js";
import { useMediaQuery } from "react-responsive";
export const Sidebar = ({
  isOpen,
  onOpen,
  onOpenHelp,
  onOpenEditDashBoard,
  closeSidebar,
}) => {
  const dispatch = useDispatch();

  const handleLogOut = () => {
    dispatch(signOut());
  };

  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1440px)",
  });
  console.log(isDesktopOrLaptop);

  return (
    <>
      {isDesktopOrLaptop && (
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

          <BoardList onOpenEditDashBoard={onOpenEditDashBoard} />

          <BlockWrapper>
            <img
              src={Helper}
              style={{ width: "54px", height: "78px" }}
              alt="/"
            />

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
      )}
      {!isDesktopOrLaptop && (
        <Overlay onClick={closeSidebar} isOpen={isOpen}>
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

            <BoardList onOpenEditDashBoard={onOpenEditDashBoard} />

            <BlockWrapper>
              <img
                src={Helper}
                style={{ width: "54px", height: "78px" }}
                alt="/"
              />

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
        </Overlay>
      )}
    </>
  );
};

Sidebar.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onOpen: PropTypes.func.isRequired,
  onOpenHelp: PropTypes.func.isRequired,
  onOpenEditDashBoard: PropTypes.func.isRequired,
  closeSidebar: PropTypes.func.isRequired,
};
