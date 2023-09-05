import { useState } from "react";
import { useToggle } from "../../shared/hooks/useToggle";
import { useMediaQuery } from "react-responsive";

import NeedHelp from "../../shared/components/Modal/NeedHelp/NeedHelp";
import { Header } from "../../shared/components/Header/Header";
import { Sidebar } from "../../shared/components/Sidebar/Sidebar";
import { Modal } from "../../shared/components/Modal/Modal";
import DeleteModal from "../../shared/components/Modal/DeleteModal/DeleteModal";
import BoardModal from "../../shared/components/Modal/BoardModal/BoardModal";
import Dashboard from "../../shared/components/Dashboard/Dashboard";
import { Overlay } from "../../shared/components/Sidebar/Overlay";

import { GlobalStylesHome } from "../../shared/components/styles/GlobalStyles.styled";

import * as css from "./HomePage.styled";

export const HomePage = () => {
  const { isOpen, close, open } = useToggle();
  const [modalOpen, setModalOpen] = useState(false);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false)
  const [helpModalOpen, setHelpModalOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedDashboardId, setSelectedDashboardId] = useState(null);

  const toggleModal = () => {
    setModalOpen(true);
  };

  const openDeleteModal = (dashboardId) => {
  setSelectedDashboardId(dashboardId);
  setDeleteModalOpen(true);
  }
  
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

  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1440px)",
  });

  return (
    <>
      <GlobalStylesHome />
      <css.FlexDiv>
        {" "}
        {isDesktopOrLaptop && (
          <Sidebar
            onOpenEditDashBoard={handleModalOpen}
            closeSidebar={close}
            isOpen={isOpen}
            onOpenCreateBoard={toggleModal}
            onOpenHelp={openHelpModal}
            openDeleteModal={openDeleteModal}

          />
        )}
        {!isDesktopOrLaptop && (
          <>
            <Sidebar
              onOpenCreateBoard={toggleModal}
              onOpenEditDashBoard={handleModalOpen}
              isOpen={isOpen}
              onOpenHelp={openHelpModal}
            />
            <Overlay closeSidebar={close} isOpen={isOpen} />
          </>
        )}
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

        {deleteModalOpen && (
  <Modal onClose={() => setDeleteModalOpen(false)}>
    <DeleteModal onCloseModal={() => setDeleteModalOpen(false)} dashboardId={selectedDashboardId} />
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
          <Dashboard openDeleteModal={openDeleteModal} />
        </css.HeadBoardDIv>
      </css.FlexDiv>
    </>
  );
};
