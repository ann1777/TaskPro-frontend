import { useEffect, useRef, useState } from "react";
import CardModal from "../Modal/CardModal/CardModal";
import { Modal } from "../Modal/Modal";
import * as css from "./Card.styled";
import sprite from "../../images/icons.svg";
import PropTypes from "prop-types";

const Card = ({
  column,
  columns,
  selectedPriority,
  openFilterMenuForCardId,
  setOpenFilterMenuForCardId,
}) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [isFilterMenuOpen, setIsFilterMenuOpen] = useState(false);
  const cardRef = useRef(null);
  console.log(columns);
  // console.log(column.cards);

  //  const deleteCard = async (cardId) => {
  //   const token = localStorage.getItem("accessToken");
  //   await axios.delete(
  //     `https://taskpro-backend-c73a.onrender.com/api/card/${id}/${cardId}`,
  //     {
  //       headers: {
  //         Authorization: `Bearer ${token}`,
  //       },
  //     }
  //   );
  //   apiDashboard();
  // };

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

  const cards = column.cards.filter((item) => {
    if (selectedPriority === "all" || selectedPriority === null) {
      return true;
    } else {
      return item.priority === selectedPriority;
    }
  });

  const handleFilterMenuOpen = (cardId) => {
    if (openFilterMenuForCardId === cardId && isFilterMenuOpen) {
      // Если FilterMenu уже открыто для этой карточки и оно открыто, закрываем его
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

  return (
    <div ref={cardRef}>
      <css.UlCard>
        {cards.map((card) => (
          <css.LiCard key={card._id} $property={card.priority}>
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
                  <css.SvgAll
                    onClick={() => {
                      handleFilterMenuOpen(card._id);
                    }}
                  >
                    <use
                      href={sprite + "#icon-arrow-circle-broken-right"}
                    ></use>
                  </css.SvgAll>
                  {openFilterMenuForCardId === card._id && (
                    <css.FilterMenu>
                      {columns.map((column) => (
                        <css.ColumnsDiv key={column._id}>
                          {column.title}
                          <css.SvgAll>
                            <use
                              onClick={() => handleFilterMenuOpen(card._id)}
                              href={sprite + "#icon-arrow-circle-broken-right"}
                            ></use>
                          </css.SvgAll>
                        </css.ColumnsDiv>
                      ))}
                    </css.FilterMenu>
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
        ))}
      </css.UlCard>
    </div>
  );
};

Card.propTypes = {
  column: PropTypes.object.isRequired,
  selectedPriority: PropTypes.string,
  openFilterMenuForCardId: PropTypes.string,
  setOpenFilterMenuForCardId: PropTypes.func,
};

export default Card;
