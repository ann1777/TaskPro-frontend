import { useState } from "react";
import { Header } from "../../shared/components/Header/Header";
import { Sidebar } from "../../shared/components/Sidebar/Sidebar";
import { GlobalStylesHome } from "../../shared/components/styles/GlobalStyles.styled";
import { Modal } from "../../shared/components/Modal/Modal";
import AddBoard from "../../shared/components/Modal/AddBoard/AddBoard";
import NeedHelp from "../../shared/components/Modal/NeedHelp/NeedHelp";
import { useToggle } from "../../shared/hooks/useToggle";

export const HomePage = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [helpModalOpen, setHelpModalOpen] = useState(false);
  const { isOpen, toggle } = useToggle();
  const toggleModal = () => {
    setModalOpen(true);
  };

  const openHelpModal = () => {
    setHelpModalOpen(true);
  };

  return (
    <>
      <GlobalStylesHome />
      <Sidebar
        closeSidebar={toggle}
        isOpen={isOpen}
        onOpen={toggleModal}
        onOpenHelp={openHelpModal}
      />
      {modalOpen && (
        <Modal>
          <AddBoard />
        </Modal>
      )}

      {helpModalOpen && (
        <Modal>
          <NeedHelp />
        </Modal>
      )}
      <Header openSidebar={toggle} />
    </>
  );
};
