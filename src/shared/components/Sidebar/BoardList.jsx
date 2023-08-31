import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { allDashboards } from "../../../redux/dashboards/dashboardsSelectos.js";
import {
  fetchAllDashboardsThunk,
  updateDashboardThunk,
  deleteDashboardThunk,
} from "../../../redux/dashboards/operations.js";
import sprite from "../../images/icons.svg";
import {
  ProjectList,
  ProjectIcon,
  PencilIcon,
  TrashIcon,
  ProjectName,
  Project,
} from "../Sidebar/BoardList.styled";
import axios from 'axios';
import { Link } from "react-router-dom";
import { Modal } from "../Modal/Modal.jsx";
import BoardModal from "../Modal/BoardModal/BoardModal.jsx";

export const BoardList = () => {
  // const dispatch = useDispatch();
  // const dashboards = useSelector(allDashboards);

  const [arrayDashboard, setArrayDashboard] = useState([]);
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedDashboardId, setSelectedDashboardId] = useState(null);

  const handleModalOpen = (dashboardId) => {
    setSelectedDashboardId(dashboardId);
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setSelectedDashboardId(null);
    setModalOpen(false);
  };

  useEffect(() => {
    const apiDashboard = async () => {
      const token = localStorage.getItem('accessToken');
      const { data } = await axios.get("https://taskpro-backend-c73a.onrender.com/api/dashboard/", {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      
      setArrayDashboard(data);
    }

    apiDashboard();

    // dispatch(fetchAllDashboardsThunk());
  }, []);

  const elements = arrayDashboard.map((dashboard) => (
    <Project key={dashboard._id}>

      <ProjectIcon>
           <use xlinkHref={`${sprite}#${dashboard.icon}`} />
      </ProjectIcon>
      <ProjectName><Link to={`/home/${dashboard._id}`}>{dashboard.title}</Link></ProjectName>

      <button
        type="button"
        onClick={() => handleModalOpen(dashboard._id)}>
        <PencilIcon>
          <use href={sprite + "#icon-pencil-01"}></use>
        </PencilIcon>
      </button>
      
      {isModalOpen && (
        <Modal onClose={handleModalClose}>
          <BoardModal isEditMode={true} dashboardId={selectedDashboardId} onClose={handleModalClose} />
        </Modal>
      )}

      <button
        type="button"
        onClick={() => {
          deleteDashboardThunk(dashboard._id);
        }}
      >
        <TrashIcon>
          <use href={sprite + "#icon-trash-04"}></use>
        </TrashIcon>
      </button>
    </Project>
  ));

  return <ProjectList>{elements}</ProjectList>;
};