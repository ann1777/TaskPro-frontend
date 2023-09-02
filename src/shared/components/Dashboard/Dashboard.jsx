import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ColumnModal from "../Modal/ColumnModal/ColumnModal";
import { Modal } from "../Modal/Modal";
import * as css from "./Dashboard.styled";
import Columns from "../Columns/Columns";
import sprite from "../../images/icons.svg";

const Dashboard = () => {
  const { dashboardId } = useParams();
  const [dashboard, setDashboard] = useState([]);
  const [isAddBoardOpen, setIsAddBoardOpen] = useState(false);
  const [isModalOpen, setModalOpen] = useState(false);
  const [isFilterMenuOpen, setIsFilterMenuOpen] = useState(false);
  const [selectedPriority, setSelectedPriority] = useState(null);

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

  useEffect(() => {
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

  const handleFilterMenuOpen = () => {
    setIsFilterMenuOpen(true);
  };

  const handleFilterMenuClose = () => {
    setIsFilterMenuOpen(false);
  };

  const filterCardsByPriority = (priority) => {
    setSelectedPriority(priority);
  };

  return (
    <css.DivFull>
      {dashboardId ? (
        <>
          {dashboard.title && (
            <>
              <css.FilterDiv>
                <css.H1>{dashboard.title}</css.H1>
                <css.FilterBtn onClick={handleFilterMenuOpen}>
                  <css.FilterSvg>
                    <use href={sprite + "#icon-filter-priority"}></use>
                  </css.FilterSvg>
                  Filters
                </css.FilterBtn>
                {isFilterMenuOpen && (
                  <css.FilterMenu>
                    <css.StyledCloseButton onClick={handleFilterMenuClose}>
                      <css.Svg width="18" height="18">
                        <use href={sprite + "#icon-x-close"} />
                      </css.Svg>
                    </css.StyledCloseButton>
                    <p>Filters</p>
                    <ul>
                      <li onClick={() => filterCardsByPriority("Without")}>
                        Without
                      </li>
                      <li onClick={() => filterCardsByPriority("Low")}>Low</li>
                      <li onClick={() => filterCardsByPriority("Medium")}>
                        Medium
                      </li>
                      <li onClick={() => filterCardsByPriority("High")}>
                        High
                      </li>
                    </ul>
                  </css.FilterMenu>
                )}
              </css.FilterDiv>

              <css.DivColumsBtn>
                <Columns filterCardsByPriority={filterCardsByPriority} />
                <div>
                  <css.ButtonAddColumn onClick={handleModalOpen}>
                    <css.IconPlus />
                    Add another column
                  </css.ButtonAddColumn>
                </div>
              </css.DivColumsBtn>
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
