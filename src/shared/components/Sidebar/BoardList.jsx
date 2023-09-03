import PropTypes from "prop-types";
import axios from "axios";
import { useEffect, useState } from "react";
// import { useSelector } from "react-redux";
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
  IconWrapper,
} from "../Sidebar/BoardList.styled";

export const BoardList = ({ onOpenEditDashBoard }) => {
  // const dashboards = useSelector((state) => state.dashboards.dashboards);
  const [arrayDashboard, setArrayDashboard] = useState([]);

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

        <IconWrapper>
          <PencilIcon onClick={() => onOpenEditDashBoard(dashboard._id)}>
            <use href={sprite + "#icon-pencil-01"}></use>
          </PencilIcon>

          <TrashIcon
            onClick={() => {
              deleteDashboardThunk(dashboard._id);
            }}
          >
            <use href={sprite + "#icon-trash-04"}></use>
          </TrashIcon>
        </IconWrapper>
      </StyledNavLink>
    </Project>
  ));

  return <ProjectList>{elements}</ProjectList>;
};

BoardList.propTypes = {
  onOpenEditDashBoard: PropTypes.func.isRequired,
};
