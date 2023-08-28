import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
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


export const BoardList = () => {
  const dispatch = useDispatch();
  const dashboards = useSelector(allDashboards);

  useEffect(() => {
    dispatch(fetchAllDashboardsThunk());
  }, [dispatch]);

  const elements = dashboards.map((dashboard) => (
    <Project key={dashboard.id}>
      <ProjectIcon>
        <use href={sprite + "#icon-Project"}></use>
      </ProjectIcon>
      <ProjectName>Project office</ProjectName>

      <button
        type="button"
        onClick={() => {
          updateDashboardThunk(dashboard.id);
        }}
      >
        <PencilIcon>
          <use href={sprite + "#icon-pencil-01"}></use>
        </PencilIcon>
      </button>

      <button
        type="button"
        onClick={() => {
          deleteDashboardThunk(dashboard.id);
        }}
      >
        <TrashIcon>
          <use href={sprite + "#icon-trash-04"}></use>
        </TrashIcon>
      </button>
    </Project>
  ));

  return <ProjectList>{elements}</ProjectList>
};
