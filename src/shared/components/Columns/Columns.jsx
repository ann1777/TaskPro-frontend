import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Card from "../Card/Card";
import CardModal from "../Modal/CardModal/CardModal";
import { Modal } from "../Modal/Modal";
import ColumnModal from "../Modal/ColumnModal/ColumnModal";

const Columns = () => {
  const { dashboardId } = useParams();
  const [columns, setColumns] = useState([]);
  const [isModalOpen, setModalOpen] = useState(false);
  const [isColumnModalOpen, setColumnModalOpen] = useState(false);

  const apiDashboard = async () => {
    if (dashboardId) {
      const token = localStorage.getItem("accessToken");
      const { data } = await axios.get(
        `https://taskpro-backend-c73a.onrender.com/api/column/${dashboardId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setColumns(data);
    }
  };

  useEffect(() => {
    apiDashboard();
  }, [dashboardId]);

  const handleModalOpen = () => {
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setModalOpen(false);
  };

  const handleColumnModalOpen = () => {
    setColumnModalOpen(true);
  };

  const handleColumnModalClose = () => {
    setColumnModalOpen(false);
  };

  const deleteColumn = async (columnId) => {
    const token = localStorage.getItem("accessToken");
    await axios.delete(
      `https://taskpro-backend-c73a.onrender.com/api/column/${dashboardId}/${columnId}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    apiDashboard();
  };

  return (
    <>
      <ul>
        {columns.map((column) => (
          <>
            <li key={column._id}>
              <div>{column.title}</div>
              <button onClick={handleColumnModalOpen}>Edit</button>
              {isColumnModalOpen && (
              <Modal onClose={handleColumnModalClose}>
                  <ColumnModal onCloseModal={handleColumnModalClose} columnId={column._id} isEditMode={true} />
              </Modal>
            )}
              <button onClick={() => deleteColumn(column._id)}>Delete</button>
              <Card id={column._id} />
            </li>
            <button onClick={handleModalOpen}>Add another card</button>
            {isModalOpen && (
              <Modal onClose={handleModalClose}>
                <CardModal onCloseModal={handleModalClose} columnId={column._id} />
              </Modal>
            )}
          </>
        ))}
      </ul>
    </>
  );
};

export default Columns;
