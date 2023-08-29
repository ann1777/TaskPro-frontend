import { Header } from "../../shared/components/Header/Header";
import { Sidebar } from "../../shared/components/Sidebar/Sidebar";
import { GlobalStylesHome } from "../../shared/components/styles/GlobalStyles.styled";
import { Modal } from "../../shared/components/Modal/Modal";
import AddBoard from "../../shared/components/Modal/AddBoard/AddBoard";
import { useState } from "react";
import Dashboard from "../../shared/components/Dashboard/Dashboard";



export const HomePage = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const toggleModal = () => {
    setModalOpen(true);
  };

  return (
    <>
      <GlobalStylesHome />
      <Sidebar onOpen={toggleModal}/>
      {modalOpen && (
        <Modal>
          <AddBoard />
        </Modal>
      )}
      <Header />
      <Dashboard />
    </>
  );
};
