import { useState } from "react";
import { useToggle } from "../../shared/hooks/useToggle";

import NeedHelp from "../../shared/components/Modal/NeedHelp/NeedHelp";
import { Header } from "../../shared/components/Header/Header";
import { Sidebar } from "../../shared/components/Sidebar/Sidebar";
import { Modal } from "../../shared/components/Modal/Modal";
import BoardModal from "../../shared/components/Modal/BoardModal/BoardModal";
import Dashboard from "../../shared/components/Dashboard/Dashboard";

import { GlobalStylesHome } from "../../shared/components/styles/GlobalStyles.styled";

import * as css from "./HomePage.styled";

export const HomePage = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [helpModalOpen, setHelpModalOpen] = useState(false);
  const { isOpen, close, open } = useToggle();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedDashboardId, setSelectedDashboardId] = useState(null);

  const toggleModal = () => {
    setModalOpen(true);
  };

  const openHelpModal = () => {
    setHelpModalOpen(true);
  };

  const closeHelpModal = () => {
    setHelpModalOpen(false);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const handleModalOpen = (dashboardId) => {
    setSelectedDashboardId(dashboardId);
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setSelectedDashboardId(null);
    setIsModalOpen(false);
  };

  return (
    <>
      <GlobalStylesHome />
      <css.FlexDiv>
        {" "}
        <Sidebar
          onOpenEditDashBoard={handleModalOpen}
          closeSidebar={close}
          isOpen={isOpen}
          onOpen={toggleModal}
          onOpenHelp={openHelpModal}
        />
        {modalOpen && (
          <Modal>
            <BoardModal />
          </Modal>
        )}
        {helpModalOpen && (
          <Modal onClose={closeHelpModal}>
            <NeedHelp onClose={closeHelpModal} />
          </Modal>
        )}
        {modalOpen && (
          <Modal onClose={closeModal}>
            <BoardModal onClose={closeModal} />
          </Modal>
        )}
        {isModalOpen && (
          <Modal onClose={handleModalClose}>
            <BoardModal
              isEditMode={true}
              dashboardId={selectedDashboardId}
              onClose={handleModalClose}
            />
          </Modal>
        )}
        <css.HeadBoardDIv>
          <Header isOpen={isOpen} openSidebar={open} />
          <Dashboard />
        </css.HeadBoardDIv>
      </css.FlexDiv>
    </>
  );
};
