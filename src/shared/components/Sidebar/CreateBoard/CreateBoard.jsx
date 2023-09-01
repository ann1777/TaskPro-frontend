import PropTypes from "prop-types";
import {
  Title,
  Plus,
  Wrapper,
  CreateBoardButton,
  CreateText,
} from "./CreateBoard.styled.jsx";
import sprite from "../../../images/icons.svg";

export const CreateBoard = ({ onOpenCreateBoard }) => {
  return (
    <>
      <Title>My boards</Title>

      <Wrapper>
        <CreateText>
          Create a<br></br>new board
        </CreateText>
        <CreateBoardButton onClick={onOpenCreateBoard}>
          <Plus>
            <use href={sprite + "#icon-plus"}></use>
          </Plus>
        </CreateBoardButton>
      </Wrapper>
    </>
  );
};

CreateBoard.propTypes = {
  onOpenCreateBoard: PropTypes.func.isRequired,
};
