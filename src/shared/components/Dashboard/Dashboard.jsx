import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AddColumn from "../Modal/AddColumn/AddColumn";
import AddBoard from "../Modal/AddBoard/AddBoard";
import { Modal } from "../Modal/Modal";

const Dashboard = () => {
  const { dashboardId } = useParams();
  const [dashboard, setDashboard] = useState([]);
  const [isAddColumnOpen, setIsAddColumnOpen] = useState(false);
  const [isAddBoardOpen, setIsAddBoardOpen] = useState(false);

  useEffect(() => {
    const apiDashboard = async () => {
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
    };

    apiDashboard();
  }, [dashboardId]);

  const toggleAddColumnModal = () => {
    setIsAddColumnOpen(!isAddColumnOpen);
  };

  const toggleAddBoardModal = () => {
    setIsAddBoardOpen(!isAddBoardOpen); 
  };

  return (
    <>
      {dashboardId ? (
        <>
          <div>{dashboard.title}</div>
          <button onClick={toggleAddColumnModal}>Add another column</button>
          {isAddColumnOpen && 
          <Modal>
          <AddColumn onClose={toggleAddColumnModal} />
          </Modal>
          }
        </>
      ) : (
        <p>
          Before starting your project, it is essential <span onClick={toggleAddBoardModal} style={{ cursor: "pointer", color: "#BEDBB0"}}>to create a board to</span>
          visualize and track all the necessary tasks and milestones. This board
          serves as a powerful tool to organize the workflow and ensure
          effective collaboration among team members.
        </p>
        
      )}
      
      {isAddBoardOpen && 
      <Modal>
      <AddBoard onClose={toggleAddBoardModal} />
      </Modal>
      }
    </>
  );
};

export default Dashboard;
