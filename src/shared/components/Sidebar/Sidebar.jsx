import PropTypes from "prop-types";
import { StyledSidebar, AppName, LogoWrapper } from "./Sidebar.styled";
import sprite from "../../images/icons.svg";

import { Logo } from "./Sidebar.styled";
import { BoardList } from "./BoardList";

import { CreateBoard } from "./CreateBoard/CreateBoard";
import { NeedHelpBlock } from "./NeedHelpBlock/NeedHelpBlock";
import { LogOut } from "./LogOut/LogOut";

export const Sidebar = ({
  isOpen,
  onOpenCreateBoard,
  onOpenHelp,
  onOpenEditDashBoard,
}) => {
  return (
    <StyledSidebar isOpen={isOpen}>
      <LogoWrapper>
        <Logo>
          <use href={sprite + "#icon-logo"}></use>
        </Logo>
        <AppName>Task Pro</AppName>
      </LogoWrapper>

      <CreateBoard onOpenCreateBoard={onOpenCreateBoard} />

      <BoardList onOpenEditDashBoard={onOpenEditDashBoard} />

      <NeedHelpBlock onOpenHelp={onOpenHelp} />

      <LogOut />
    </StyledSidebar>
  );
};

Sidebar.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onOpenCreateBoard: PropTypes.func.isRequired,
  onOpenHelp: PropTypes.func.isRequired,
  onOpenEditDashBoard: PropTypes.func.isRequired,
};
