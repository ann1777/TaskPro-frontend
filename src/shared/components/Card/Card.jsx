import axios from "axios";
import { useEffect, useState } from "react";
import CardModal from "../Modal/CardModal/CardModal";
import { Modal } from "../Modal/Modal";

const Card = ({ id }) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [cards, setCards] = useState([]);
  console.log(cards);

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

  return (
    <>
      <ul>
        {cards.map((card) => (
          <li key={card._id}>
            <div>{card.title}</div>
            <div>{card.description}</div>
            <div>{card.priority}</div>
            <div>{card.deadline}</div>
            <button>MoveCard</button>
            <button onClick={handleModalOpen}>EditCard</button>
            {isModalOpen && (
              <Modal onClose={handleModalClose}>
                <CardModal onCloseModal={handleModalClose} />
              </Modal>
            )}
            <button onClick={() => deleteCard(card._id)}>DeleteCard</button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Card;
