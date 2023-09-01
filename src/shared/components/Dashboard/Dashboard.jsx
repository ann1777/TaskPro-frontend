import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ColumnModal from "../Modal/ColumnModal/ColumnModal";
import { Modal } from "../Modal/Modal";
import * as css from "./Dashboard.styled";
import Columns from "../Columns/Columns";

const Dashboard = () => {
  const { dashboardId } = useParams();
  const [dashboard, setDashboard] = useState([]);
  const [isAddBoardOpen, setIsAddBoardOpen] = useState(false);
  const [isModalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const apiDashboard = async () => {
      if (dashboardId) {
        const token = localStorage.getItem("accessToken");
        const { data } = await axios.get(
          `https://taskpro-backend-c73a.onrender.com/api/dashboard/${dashboardId}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setDashboard(data);
      }
    };

    apiDashboard();
  }, [dashboardId]);

  const toggleAddBoardModal = () => {
    setIsAddBoardOpen(!isAddBoardOpen);
  };

  const handleModalOpen = () => {
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setModalOpen(false);
  };

  return (
    <css.DivFull>
      {dashboardId ? (
        <>
          {dashboard.title && (
            <>
              <css.H1>{dashboard.title}</css.H1>
              <Columns />
              <css.ButtonAddColumn onClick={handleModalOpen}>
                <css.IconPlus />
                Add another column
              </css.ButtonAddColumn>
            </>
          )}
          {isModalOpen && (
            <Modal onClose={handleModalClose}>
              <ColumnModal onCloseModal={handleModalClose} />
            </Modal>
          )}
        </>
      ) : (
        <css.DivText>
          <p>
            Before starting your project, it is essential{" "}
            <span
              onClick={toggleAddBoardModal}
              style={{ cursor: "pointer", color: "#BEDBB0" }}
            >
              to create a board to{" "}
            </span>
            visualize and track all the necessary tasks and milestones. This
            board serves as a powerful tool to organize the workflow and ensure
            effective collaboration among team members.
          </p>
        </css.DivText>
      )}

      {isAddBoardOpen && (
        <Modal>
          <ColumnModal onClose={toggleAddBoardModal} />
        </Modal>
      )}
    </css.DivFull>
  );
};

export default Dashboard;
