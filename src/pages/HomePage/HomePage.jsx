import { useState } from "react";
import { useToggle } from "../../shared/hooks/useToggle";

import NeedHelp from "../../shared/components/Modal/NeedHelp/NeedHelp";
import { Header } from "../../shared/components/Header/Header";
import { Sidebar } from "../../shared/components/Sidebar/Sidebar";
import { Modal } from "../../shared/components/Modal/Modal";
import AddBoard from "../../shared/components/Modal/AddBoard/AddBoard";
import Dashboard from "../../shared/components/Dashboard/Dashboard";

import { GlobalStylesHome } from "../../shared/components/styles/GlobalStyles.styled";

import * as css from './HomePage.styled';

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

      <css.FlexDiv>
        <Sidebar
          closeSidebar={toggle}
          isOpen={isOpen}
          onOpen={toggleModal}
          onOpenHelp={openHelpModal}
        />

        {helpModalOpen && (
          <Modal>
            <NeedHelp />
          </Modal>
        )}
        <css.HeadBoardDIv>
          <Header openSidebar={toggle} />
          <Dashboard />
        </css.HeadBoardDIv>
      </css.FlexDiv>


    </>
  );
};
