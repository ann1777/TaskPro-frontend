// import { useSelector, useDispatch } from "react-redux";
// import { useEffect, useState } from "react";

// import {
//   updateDashboardThunk,
//   deleteDashboardThunk,
// } from "../../../redux/dashboards/operations.js";
// import sprite from "../../images/icons.svg";
// import {
//   ProjectList,
//   ProjectIcon,
//   PencilIcon,
//   TrashIcon,
//   ProjectName,
//   Project,
//   NameWrapper,
// } from "../Sidebar/BoardList.styled";
// import axios from "axios";
// import { StyledLink } from "./BoardList.styled.jsx";

// export const BoardList = () => {
//   const [arrayDashboard, setArrayDashboard] = useState([]);

//   useEffect(() => {
//     const apiDashboard = async () => {
//       const token = localStorage.getItem("accessToken");
//       const { data } = await axios.get(
//         "https://taskpro-backend-c73a.onrender.com/api/dashboard/",
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         }
//       );

//       setArrayDashboard(data);
//     };

//     apiDashboard();
//   }, []);

//   const elements = arrayDashboard.map((dashboard) => (
//     <Project key={dashboard._id}>
//       <StyledLink to={`/home/${dashboard._id}`}>
//         <ProjectIcon>
//           <use href={sprite + "#icon-Project"}></use>
//         </ProjectIcon>
//         <NameWrapper>
//           {" "}
//           <ProjectName>
//             {dashboard.title}

//             {/* <StyledLink to={`/home/${dashboard._id}`}>
//             {dashboard.title}
//           </StyledLink> */}
//           </ProjectName>
//         </NameWrapper>

//         <PencilIcon>
//           <use href={sprite + "#icon-pencil-01"}></use>
//         </PencilIcon>

//         <TrashIcon>
//           <use href={sprite + "#icon-trash-04"}></use>
//         </TrashIcon>
//       </StyledLink>
//     </Project>
//   ));

//   return <ProjectList>{elements}</ProjectList>;
// };

import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { deleteDashboardThunk } from "../../../redux/dashboards/operations.js";
import sprite from "../../images/icons.svg";
import {
  ProjectList,
  ProjectIcon,
  PencilIcon,
  TrashIcon,
  ProjectName,
  Project,
  StyledNavLink,
  ProjectNameWrapper,
} from "../Sidebar/BoardList.styled";
import axios from "axios";

export const BoardList = ({ onOpenEditDashBoard }) => {
  // const dispatch = useDispatch();
  // const dashboards = useSelector(allDashboards);

  const [arrayDashboard, setArrayDashboard] = useState([]);
  // const [isModalOpen, setModalOpen] = useState(false);
  // const [selectedDashboardId, setSelectedDashboardId] = useState(null);

  // const handleModalOpen = (dashboardId) => {
  //   setSelectedDashboardId(dashboardId);
  //   setModalOpen(true);
  // };

  // const handleModalClose = () => {
  //   setSelectedDashboardId(null);
  //   setModalOpen(false);
  // };

  useEffect(() => {
    const apiDashboard = async () => {
      const token = localStorage.getItem("accessToken");
      const { data } = await axios.get(
        "https://taskpro-backend-c73a.onrender.com/api/dashboard/",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setArrayDashboard(data);
    };

    apiDashboard();

    // dispatch(fetchAllDashboardsThunk());
  }, []);

  const elements = arrayDashboard.map((dashboard) => (
    <Project key={dashboard._id}>
      <StyledNavLink to={`/home/${dashboard._id}`}>
        <ProjectIcon>
          <use xlinkHref={`${sprite}#${dashboard.icon}`} />
        </ProjectIcon>

        <ProjectNameWrapper style={{ width: "122px" }}>
          <ProjectName>{dashboard.title}</ProjectName>
        </ProjectNameWrapper>

        {/* <button
        type="button"
        onClick={() => handleModalOpen(dashboard._id)}> */}
        <PencilIcon onClick={() => onOpenEditDashBoard(dashboard._id)}>
          <use href={sprite + "#icon-pencil-01"}></use>
        </PencilIcon>
        {/* </button> */}

        {/* {isModalOpen && (
          <Modal onClose={handleModalClose}>
            <BoardModal
              isEditMode={true}
              dashboardId={selectedDashboardId}
              onClose={handleModalClose}
            />
          </Modal>
        )} */}

        {/* <button
        type="button"
        onClick={() => {
          deleteDashboardThunk(dashboard._id);
        }}
      > */}

        <TrashIcon
          onClick={() => {
            deleteDashboardThunk(dashboard._id);
          }}
        >
          <use href={sprite + "#icon-trash-04"}></use>
        </TrashIcon>

        {/* </button> */}
      </StyledNavLink>
    </Project>
  ));

  return <ProjectList>{elements}</ProjectList>;
};

BoardList.propTypes = {
  onOpenEditDashBoard: PropTypes.func.isRequired,
};
