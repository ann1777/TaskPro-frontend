import PropTypes from "prop-types";
import { useSelector } from "react-redux";
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
import { allDashboards } from "../../../redux/dashboards/dashboardsSelectos.js";
import { useDispatch } from "react-redux";
import { deleteDashboardThunk } from "../../../redux/dashboards/operations";

export const BoardList = ({ onOpenEditDashBoard }) => {
  const dashboards = useSelector(allDashboards);
  const dispatch = useDispatch(deleteDashboardThunk);
  const handleDelete = (dashboard) => {
    dispatch(deleteDashboardThunk(dashboard._id));
  };
  return (
    <ProjectList>
      {dashboards.length > 0 &&
        dashboards.map((dashboard) => (
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
                  dashboard={dashboard}
                  onClick={() => {
                    handleDelete(dashboard);
                  }}
                >
                  <use href={sprite + "#icon-trash-04"}></use>
                </TrashIcon>
              </IconWrapper>
            </StyledNavLink>
          </Project>
        ))}
    </ProjectList>
  );
};

BoardList.propTypes = {
  onOpenEditDashBoard: PropTypes.func.isRequired,
};
