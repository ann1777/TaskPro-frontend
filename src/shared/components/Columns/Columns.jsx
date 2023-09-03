import axios from "axios";
import { useState } from "react";
import { useParams } from "react-router-dom";
import Card from "../Card/Card";
import CardModal from "../Modal/CardModal/CardModal";
import { Modal } from "../Modal/Modal";
import ColumnModal from "../Modal/ColumnModal/ColumnModal";
import * as css from "./Columns.styled";
import sprite from "../../images/icons.svg";
import PropTypes from "prop-types";

const Columns = ({ dashboard, selectedPriority }) => {
  const { dashboardId } = useParams();
  const [isModalOpen, setModalOpen] = useState(false);
  const [isColumnModalOpen, setColumnModalOpen] = useState(false);
  const [currentColumnId, setCurrentColumnId] = useState(null);
  const [openFilterMenuForCardId, setOpenFilterMenuForCardId] = useState(null);

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

  const deleteColumn = async (columnId) => {
    const token = localStorage.getItem("accessToken");
    await axios.delete(
      `https://taskpro-backend-c73a.onrender.com/api/column/${dashboardId}/${columnId}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    
  };

  return (
    <>
      <css.UlFull>
        {dashboard.columns.map((column) => (
          <>
            <css.LiColumn key={column._id}>
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
              <Card column={column} columns={dashboard.columns} selectedPriority={selectedPriority} openFilterMenuForCardId={openFilterMenuForCardId}
                setOpenFilterMenuForCardId={setOpenFilterMenuForCardId}/>

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
        ))}
      </css.UlFull>
    </>
  );
};

Columns.propTypes = {
  dashboard: PropTypes.object.isRequired,
  selectedPriority: PropTypes.string,
};

export default Columns;
