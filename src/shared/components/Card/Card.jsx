import axios from "axios";
import { useEffect, useState } from "react";
import CardModal from "../Modal/CardModal/CardModal";
import { Modal } from "../Modal/Modal";
import * as css from "./Card.styled";
import sprite from "../../images/icons.svg";

const Card = ({ id }) => {
   const [isModalOpen, setModalOpen] = useState(false);
  const [cards, setCards] = useState([]);
  

  const apiDashboard = async () => {
    if (id) {
      const token = localStorage.getItem("accessToken");
      const { data } = await axios.get(
        `https://taskpro-backend-c73a.onrender.com/api/card/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setCards(data);
    }
  };

  useEffect(() => {
    apiDashboard();
  }, [id]);

  const deleteCard = async (cardId) => {
    const token = localStorage.getItem("accessToken");
    await axios.delete(
      `https://taskpro-backend-c73a.onrender.com/api/card/${id}/${cardId}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    apiDashboard();
  };

  const handleModalOpen = () => {
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setModalOpen(false);
  };





  function formatDate(date) {
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const year = date.getFullYear();
    return `${month}/${day}/${year}`;
  }


  // Вызываем функцию для форматирования

  return (
    <>
      <css.UlCard>
        {cards.map((card) => (
          <css.LiCard key={card._id}>
            <css.LiCardH2>{card.title}</css.LiCardH2>
            <css.LiCardP>{card.description}</css.LiCardP>
            <css.DivEditBefor>
              <css.DivDivEdit>
                <css.DivEditPrioDead>
                  <css.DivPriority><p>Priority</p><div>{card.priority}</div></css.DivPriority>
                  <css.DivDeadline><p>Deadline</p><div>{formatDate(new Date(card.deadline))}</div></css.DivDeadline>
                </css.DivEditPrioDead>

                <css.DivDivEditSvg>
                  <css.SvgAll >
                    <use href={sprite + "#icon-arrow-circle-broken-right"}></use>
                  </css.SvgAll>




                  <css.SvgAll onClick={handleModalOpen}>
                    <use href={sprite + "#icon-pencil-01"}></use>
                  </css.SvgAll>

                  {isModalOpen && (
                    <Modal onClose={handleModalClose}>
                      <CardModal onCloseModal={handleModalClose} cardId={card._id} isEditMode={true} columnId={id} />
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
    </>
  );
};

export default Card;
