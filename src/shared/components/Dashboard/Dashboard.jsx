import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ColumnModal from "../Modal/ColumnModal/ColumnModal";
import { Modal } from "../Modal/Modal";
import * as css from "./Dashboard.styled";
import Columns from "../Columns/Columns";
import sprite from "../../images/icons.svg";
import { useSelector } from "react-redux";

import { getBackgroundByIcon } from "../../../hepers/getBackgroundByIcon";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import { useDispatch } from "react-redux";

const Dashboard = () => {
  const { dashboardId } = useParams();
  const [dashboard, setDashboard] = useState([]);
  const [isAddBoardOpen, setIsAddBoardOpen] = useState(false);
  const [isModalOpen, setModalOpen] = useState(false);
  const [isFilterMenuOpen, setIsFilterMenuOpen] = useState(false);
  const [selectedPriorities, setSelectedPriorities] = useState([]);
  const [backDashboad, setBackDashboad] = useState("");
  const dispatch = useDispatch();

  const dashboards = useSelector((state) => state.dashboards.dashboards);

  useEffect(() => {
    async function fetchData() {
      const selectedDashboard = dashboards.find(
        (item) => item._id === dashboardId
      );
      if (selectedDashboard) {
        setDashboard(selectedDashboard);
        setBackDashboad(
          await getBackgroundByIcon(selectedDashboard.background)
        );
      }
    }

    fetchData();
  }, [dashboardId, dashboards, dashboard]);

  // useEffect(() => {
  //   dashboards.map((item) => {
  //     if (item._id === dashboardId) {
  //       setDashboard(item);
  //     }
  //   });
  // }, [dashboardId]);

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
    if (isFilterMenuOpen) {
      setIsFilterMenuOpen(false);
      return;
    }
    setIsFilterMenuOpen(true);
  };

  const handleFilterMenuClose = () => {
    setIsFilterMenuOpen(false);
  };

  const hasCardsInColumns = () => {
    return dashboard.columns.some((column) => column.cards.length > 0);
  };

  const color = {
    Without: "rgba(255, 255, 255, 0.30)",
    Low: "#8FA1D0",
    Medium: "#E09CB5",
    High: "#BEDBB0",
  };

  const togglePriority = (priority) => {
    if (selectedPriorities.includes(priority)) {
      setSelectedPriorities(selectedPriorities.filter((p) => p !== priority));
    } else {
      setSelectedPriorities([...selectedPriorities, priority]);
    }
  };

  const filterCardsByPriority = () => {
    setSelectedPriorities([]);
  };

  const onDragEnd = ({ destination, source, draggableId, type }) => {
    if (!destination) return;
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    const start = dashboard.columns[source.droppableId];
    const end = dashboard.columns[destination.droppableId];

    if (type === "column") {
      console.log(destination, source, draggableId);
      const newOrder = [...dashboard.columnOrder];
      newOrder.splice(source.index, 1);
      newOrder.splice(destination.index, 0, draggableId);

      setDashboard({
        ...dashboard,
        columnOrder: newOrder
      });
      return;
    }

    if (start === end) {
      const column = dashboard.columns[source.droppableId];
      const cards = [...column.cards];
      cards.splice(source.index, 1);
      cards.splice(destination.index, 0, draggableId);
      const newColumn = {
        ...column,
        cards,
      };
      setDashboard({
        ...dashboard,
        columns: {
          ...dashboard.columns,
          [column.id]: newColumn,
        },
      });
      return;
    }

    const startCardIds = [...start.cards];
    const endCardIds = [...end.cards];

    startCardIds.splice(source.index, 1);
    endCardIds.splice(destination.index, 0, draggableId);

    const newStartColumn = {
      ...start,
      cards: startCardIds,
    };
    const endCardColumn = {
      ...end,
      cards: endCardIds,
    };

    setDashboard({
      ...dashboard,
      columns: {
        ...dashboard.columns,
        [start.id]: newStartColumn,
        [end.id]: endCardColumn,
      },
    });
    console.log("new starter", dashboard);

    console.log(destination, source, draggableId);
  };

  return (
    <css.DivFull imgUrl={backDashboad}>
      {dashboardId ? (
        <>
          {dashboard.title && (
            <>
              <css.FilterDiv>
                <css.H1>{dashboard.title}</css.H1>
                {dashboard.columns && hasCardsInColumns() && (
                  <css.FilterBtn onClick={handleFilterMenuOpen}>
                    <css.Svg width="18" height="18">
                      <use href={sprite + "#icon-filter-priority"}></use>
                    </css.Svg>
                    <css.FilterTitleBtn>Filters</css.FilterTitleBtn>
                  </css.FilterBtn>
                )}
                {isFilterMenuOpen && (
                  <css.FilterMenu>
                    <css.StyledCloseButton onClick={handleFilterMenuClose}>
                      <css.Svg width="18" height="18">
                        <use href={sprite + "#icon-x-close"} />
                      </css.Svg>
                    </css.StyledCloseButton>
                    <css.FilterTitle>Filters</css.FilterTitle>
                    <css.FilterDivLabel>
                      <css.FilterLabel>Label color</css.FilterLabel>
                      <css.FilterLabelBtn
                        onClick={() => filterCardsByPriority()}
                      >
                        Show All
                      </css.FilterLabelBtn>
                    </css.FilterDivLabel>
                    <ul>
                      <css.FilterLi onClick={() => togglePriority("without")}>
                        <css.SvgPriorityW
                          active={selectedPriorities.includes("without")}
                        >
                          <use href={sprite + "#icon-Ellipse"}></use>
                        </css.SvgPriorityW>
                        Without
                      </css.FilterLi>
                      <css.FilterLi onClick={() => togglePriority("low")}>
                        <css.SvgPriority
                          color={color.Low}
                          active={selectedPriorities.includes("low")}
                        >
                          <use href={sprite + "#icon-Ellipse"}></use>
                        </css.SvgPriority>
                        Low
                      </css.FilterLi>
                      <css.FilterLi onClick={() => togglePriority("medium")}>
                        <css.SvgPriority
                          color={color.Medium}
                          active={selectedPriorities.includes("medium")}
                        >
                          <use href={sprite + "#icon-Ellipse"}></use>
                        </css.SvgPriority>
                        Medium
                      </css.FilterLi>
                      <css.FilterLi onClick={() => togglePriority("high")}>
                        <css.SvgPriority
                          color={color.High}
                          active={selectedPriorities.includes("high")}
                        >
                          <use href={sprite + "#icon-Ellipse"}></use>
                        </css.SvgPriority>
                        High
                      </css.FilterLi>
                    </ul>
                  </css.FilterMenu>
                )}
              </css.FilterDiv>

              <css.DivColumns>
                <DragDropContext onDragEnd={onDragEnd}>
                  <Droppable
                    droppableId="all-columns"
                    type="column"
                    direction="horizontal"
                  >
                    {(provided) => (
                      <css.UlFull
                        {...provided.droppableProps}
                        ref={provided.innerRef}
                      >
                        {dashboard.columns.map((column, index) => {
                          const cards = column.cards;

                          return (
                            <Columns
                              index={index}
                              key={column._id}
                              column={column}
                              cards={cards}
                              selectedPriorities={selectedPriorities}
                            />
                          );
                        })}
                        {provided.placeholder}
                      </css.UlFull>
                    )}
                  </Droppable>
                </DragDropContext>

                <div>
                  <css.ButtonAddColumn onClick={handleModalOpen}>
                    <css.IconPlus />
                    Add another column
                  </css.ButtonAddColumn>
                </div>
              </css.DivColumns>
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
