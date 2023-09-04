import PropTypes from "prop-types";
import { StyledSidebar, AppName, LogoWrapper } from "./Sidebar.styled";
import sprite from "../../images/icons.svg";

import { Logo } from "./Sidebar.styled";
import { BoardList } from "./BoardList";
import { selectUserTheme } from "../../../redux/auth/authSelectors";
import { useSelector } from "react-redux";

import { CreateBoard } from "./CreateBoard/CreateBoard";
import { NeedHelpBlock } from "./NeedHelpBlock/NeedHelpBlock";
import { LogOut } from "./LogOut/LogOut";

export const Sidebar = ({
  isOpen,
  onOpenCreateBoard,
  onOpenHelp,
  onOpenEditDashBoard,
  openDeleteModal,
}) => {
  const activeUserTheme = useSelector(selectUserTheme);
  return (
    <StyledSidebar isOpen={isOpen}>
      <LogoWrapper>
        <Logo>
          {activeUserTheme === "color" ? (
            <use href={sprite + "#icon-logo-2"}></use>
          ) : (
            <use href={sprite + "#icon-logo-1"}></use>
          )}
        </Logo>
        <AppName>Task Pro</AppName>
      </LogoWrapper>

      <CreateBoard onOpenCreateBoard={onOpenCreateBoard} />

      <BoardList onOpenEditDashBoard={onOpenEditDashBoard} openDeleteModal={openDeleteModal} />

      <div style={{ bottom: "0", left: "0", position: "relative" }}>
      
        <NeedHelpBlock onOpenHelp={onOpenHelp} />

        <LogOut />
      </div>
    </StyledSidebar>
  );
};

Sidebar.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onOpenCreateBoard: PropTypes.func.isRequired,
  onOpenHelp: PropTypes.func.isRequired,
  onOpenEditDashBoard: PropTypes.func.isRequired,
  OpenDeleteModal: PropTypes.func.isRequired,
};
