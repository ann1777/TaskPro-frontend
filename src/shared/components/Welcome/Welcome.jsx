import Navigation from "../Navigation/Navigation";
import { Modal } from "../Modal/Modal";
import  { useState } from 'react';

function Welcome() {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleModalOpen = () => {
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setModalOpen(false);
  };
  return (
    <>
      <button onClick={handleModalOpen}>Open Modal</button>
      {isModalOpen && <Modal onClose={handleModalClose}>
        {/* Вставьте сюда содержимое для модалки, если требуется */}
        <p>This is modal content</p>
      </Modal>}
      <Navigation />
      
    </>
  );
}
export default Welcome;
