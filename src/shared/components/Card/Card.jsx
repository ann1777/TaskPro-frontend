import { useEffect, useRef, useState } from "react";
import CardModal from "../Modal/CardModal/CardModal";
import { Modal } from "../Modal/Modal";
import * as css from "./Card.styled";
import sprite from "../../images/icons.svg";
import PropTypes from "prop-types";
import { isToday } from "date-fns";
import { Draggable } from "react-beautiful-dnd";

const Card = ({
  card,
  column,
  index,
  openFilterMenuForCardId,
  setOpenFilterMenuForCardId,
}) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [isFilterMenuOpen, setIsFilterMenuOpen] = useState(false);
  const cardRef = useRef(null);

  const handleModalOpen = () => {
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setModalOpen(false);
  };

  function formatDate(date) {
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    const year = date.getFullYear();
    return `${month}/${day}/${year}`;
  }

  const handleFilterMenuOpen = (cardId) => {
    if (openFilterMenuForCardId === cardId && isFilterMenuOpen) {
      setOpenFilterMenuForCardId(null);
      setIsFilterMenuOpen(false);
    } else {
      setOpenFilterMenuForCardId(cardId);
      setIsFilterMenuOpen(true);
    }
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (cardRef.current && !cardRef.current.contains(event.target)) {
        setOpenFilterMenuForCardId(null);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [setOpenFilterMenuForCardId]);
  // ref={cardRef}

  return (
    <Draggable draggableId={card._id} index={index} type="card">
      {(provided) => (
        <css.LiCard
          $property={card.priority}
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <css.LiCardH2>{card.title}</css.LiCardH2>
          <css.LiCardP>{card.description}</css.LiCardP>
          <css.DivEditBefor>
            <css.DivDivEdit>
              <css.DivEditPrioDead>
                <css.DivPriority>
                  <p>Priority</p>
                  <css.PriorityDiv>
                    <css.SvgPriority $property={card.priority}>
                      <use href={sprite + "#icon-Ellipse"}></use>
                    </css.SvgPriority>
                    {card.priority}
                  </css.PriorityDiv>
                </css.DivPriority>
                <css.DivDeadline>
                  <p>Deadline</p>
                  <div>{formatDate(new Date(card.deadline))}</div>
                </css.DivDeadline>
              </css.DivEditPrioDead>

              <css.DivDivEditSvg>
                {isToday(new Date(card.deadline)) && (
                  <css.SvgBell>
                    <use href={sprite + "#icon-bell-01"}></use>
                  </css.SvgBell>
                )}

                <css.SvgAll onClick={handleModalOpen}>
                  <use href={sprite + "#icon-pencil-01"}></use>
                </css.SvgAll>

                {isModalOpen && (
                  <Modal onClose={handleModalClose}>
                    <CardModal
                      onCloseModal={handleModalClose}
                      cardId={card._id}
                      isEditMode={true}
                      columnId={column._id}
                    />
                  </Modal>
                )}
                <css.SvgAll onClick={() => deleteCard(card._id)}>
                  <use href={sprite + "#icon-trash-04"}></use>
                </css.SvgAll>
              </css.DivDivEditSvg>
            </css.DivDivEdit>
          </css.DivEditBefor>
        </css.LiCard>
      )}
    </Draggable>
  );
};

Card.propTypes = {
  card: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
  selectedPriorities: PropTypes.array.isRequired,
  openFilterMenuForCardId: PropTypes.string,
  setOpenFilterMenuForCardId: PropTypes.func,
  column: PropTypes.object.isRequired,
};

export default Card;
