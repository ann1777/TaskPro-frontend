import {  useState, useEffect } from "react";
import Card from "../Card/Card";
import CardModal from "../Modal/CardModal/CardModal";
import { Modal } from "../Modal/Modal";
import ColumnModal from "../Modal/ColumnModal/ColumnModal";
import * as css from "./Columns.styled";
import sprite from "../../images/icons.svg";
import PropTypes from "prop-types";
import { Draggable, Droppable } from "react-beautiful-dnd";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { deleteColumnThunk } from "../../../redux/dashboards/operations";


const Columns = ({ selectedPriorities, cards, column, index }) => {
  const { dashboardId } = useParams();
  const [isModalOpen, setModalOpen] = useState(false);
  const [isColumnModalOpen, setColumnModalOpen] = useState(false);
  const [currentColumnId, setCurrentColumnId] = useState(null);
  const [openFilterMenuForCardId, setOpenFilterMenuForCardId] = useState(null);
  const dispatch = useDispatch();




  
  const handleModalOpen = (columnId) => {
    setCurrentColumnId(columnId);
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setModalOpen(false);
  };

  const handleColumnModalOpen = () => {
    setColumnModalOpen(true);
  };

  const handleColumnModalClose = () => {
    setColumnModalOpen(false);
  };




  const cardsFiltered = cards ? cards.filter((item) => {
    if (selectedPriorities.length === 0) {
      return true;
    } else {
      return selectedPriorities.includes(item.priority);
    }
  }) : [];
  console.log("cardsFiltered:", cardsFiltered)


 

  const deleteColumn = (columnId) => {
    dispatch(deleteColumnThunk({ columnId, dashboardId }));
  };

  return (
    <Draggable draggableId={column._id} index={index} type="column">
      {(provided) => (
        <>
          <css.LiColumn
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
          >
            <css.DivTitleColumn>
              <css.DivTitleColumnText>{column.title}</css.DivTitleColumnText>
              <css.DivTitleColumnBtn>
                <css.SvgAll onClick={handleColumnModalOpen}>
                  <use href={sprite + "#icon-pencil-01"}></use>
                </css.SvgAll>

                {isColumnModalOpen && (
                  <Modal onClose={handleColumnModalClose}>
                    <ColumnModal
                      onCloseModal={handleColumnModalClose}
                      columnId={column._id}
                      isEditMode={true}
                    />
                  </Modal>
                )}

                <css.SvgAll onClick={() => deleteColumn(column._id)}>
                  <use href={sprite + "#icon-trash-04"}></use>
                </css.SvgAll>
              </css.DivTitleColumnBtn>
            </css.DivTitleColumn>
            <Droppable droppableId={column._id} type="card">
              {(provided) => (
                <css.UlCard
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                >
                  {cardsFiltered.map((card, index) => (
                    <Card
                      key={card._id}
                      card={card}
                      column={column}
                      index={index}
                      selectedPriorities={selectedPriorities}
                      openFilterMenuForCardId={openFilterMenuForCardId}
                      setOpenFilterMenuForCardId={setOpenFilterMenuForCardId}
                    />
                  ))}

                  {provided.placeholder}
                </css.UlCard>
              )}
            </Droppable>

            <css.ButtonAddCard onClick={() => handleModalOpen(column._id)}>
              <css.IconPlus />
              Add another card
            </css.ButtonAddCard>
          </css.LiColumn>

          {isModalOpen && (
            <Modal onClose={handleModalClose}>
              <CardModal
                onCloseModal={handleModalClose}
                columnId={currentColumnId}
              />
            </Modal>
          )}
        </>
      )}
    </Draggable>
  );
};

Columns.propTypes = {
  selectedPriorities: PropTypes.array.isRequired,
  cards: PropTypes.array.isRequired,
  column: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
};

export default Columns;
