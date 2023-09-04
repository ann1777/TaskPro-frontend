import { createSlice } from "@reduxjs/toolkit";
import {
  fetchAllDashboardsThunk,
  getDashboardByIdThunk,
  addDashboardThunk,
  deleteDashboardThunk,
  updateDashboardThunk,
  fetchAllColumnsThunk,
  getColumnByIdThunk,
  addColumnThunk,
  deleteColumnThunk,
  updateColumnThunk,
  fetchAllCardsThunk,
  getCardByIdThunk,
  addCardThunk,
  deleteCardThunk,
  updateCardThunk,
  updateCardColumnThunk,
} from "../dashboards/operations";
import { signin, currentUser } from "../auth/operations";

const handlePending = (state) => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const initialState = {
  dashboards: [],
  error: null,
  isLoading: false,
};

const dashboardSlice = createSlice({
  name: "dashboards",
  initialState,

  extraReducers: (builder) => {
    builder
      .addCase(fetchAllDashboardsThunk.pending, handlePending)
      .addCase(fetchAllDashboardsThunk.rejected, handleRejected)
      .addCase(fetchAllDashboardsThunk.fulfilled, () => {})
      .addCase(getDashboardByIdThunk.pending, handlePending)
      .addCase(getDashboardByIdThunk.rejected, handleRejected)
      .addCase(getDashboardByIdThunk.fulfilled, () => {})
      .addCase(addDashboardThunk.pending, handlePending)
      .addCase(addDashboardThunk.rejected, handleRejected)
      .addCase(addDashboardThunk.fulfilled, (state, action) => {
        state.dashboards.push(action.payload);
      })
      .addCase(updateDashboardThunk.pending, handlePending)
      .addCase(updateDashboardThunk.rejected, handleRejected)
      .addCase(updateDashboardThunk.fulfilled, (state, action) => {
        const index = state.dashboards.findIndex(
          (item) => item._id === action.payload._id
        );
        state.dashboards[index] = action.payload;
      })
      .addCase(deleteDashboardThunk.pending, handlePending)
      .addCase(deleteDashboardThunk.rejected, handleRejected)
      .addCase(deleteDashboardThunk.fulfilled, (state, action) => {
        const index = state.dashboards.findIndex(
          (item) => item._id === action.payload
        );
        state.dashboards.splice(index, 1);
      })
      .addCase(signin.fulfilled, (state, action) => {
        state.dashboards = action.payload.dashboards;
      })
      .addCase(currentUser.fulfilled, (state, action) => {
        state.dashboards = action.payload.dashboards;
      })
      .addCase(fetchAllColumnsThunk.pending, handlePending)
      .addCase(fetchAllColumnsThunk.rejected, handleRejected)
      .addCase(fetchAllColumnsThunk.fulfilled, () => {})
      .addCase(getColumnByIdThunk.pending, handlePending)
      .addCase(getColumnByIdThunk.rejected, handleRejected)
      .addCase(getColumnByIdThunk.fulfilled, () => {})
      .addCase(addColumnThunk.pending, handlePending)
      .addCase(addColumnThunk.rejected, handleRejected)
      .addCase(addColumnThunk.fulfilled, (state, action) => {
        const { dashboardId } = action.payload;
        const updatedDashboards = state.dashboards.map((dashboard) => {
          if (dashboard._id === dashboardId) {
            return {
              ...dashboard,
              columns: [...dashboard.columns, action.payload],
            };
          }
          return dashboard;
        });

        return {
          ...state,
          dashboards: updatedDashboards,
        };
      })
      .addCase(updateColumnThunk.pending, handlePending)
      .addCase(updateColumnThunk.rejected, handleRejected)
      .addCase(updateColumnThunk.fulfilled, (state, action) => {
        const { dashboardId, _id: columnId } = action.payload;
        const updatedDashboards = state.dashboards.map((dashboard) => {
          if (dashboard._id === dashboardId) {
            const updatedColumns = dashboard.columns.map((column) => {
              if (column._id === columnId) {
                return {
                  ...column,
                  ...action.payload,
                };
              }
              return column;
            });

            return {
              ...dashboard,
              columns: updatedColumns,
            };
          }
          return dashboard;
        });

        return {
          ...state,
          dashboards: updatedDashboards,
        };
      })
      .addCase(deleteColumnThunk.pending, handlePending)
      .addCase(deleteColumnThunk.rejected, handleRejected)
      .addCase(deleteColumnThunk.fulfilled, (state, action) => {
        const { dashboardId, deletedColumnId } = action.payload;
        const updatedDashboards = state.dashboards.map((dashboard) => {
          if (dashboard._id === dashboardId) {
            const updatedColumns = dashboard.columns.filter(
              (column) => column._id !== deletedColumnId
            );

            return {
              ...dashboard,
              columns: updatedColumns,
            };
          }
          return dashboard;
        });

        return {
          ...state,
          dashboards: updatedDashboards,
        };
      })
      .addCase(fetchAllCardsThunk.pending, handlePending)
      .addCase(fetchAllCardsThunk.rejected, handleRejected)
      .addCase(fetchAllCardsThunk.fulfilled, () => {})
      .addCase(getCardByIdThunk.pending, handlePending)
      .addCase(getCardByIdThunk.rejected, handleRejected)
      .addCase(getCardByIdThunk.fulfilled, () => {})
      .addCase(addCardThunk.pending, handlePending)
      .addCase(addCardThunk.rejected, handleRejected)
      .addCase(addCardThunk.fulfilled, (state, action) => {
        const { dashboardId, columnId } = action.payload;
        const updatedDashboards = state.dashboards.map((dashboard) => {
          if (dashboard._id === dashboardId) {
            const updatedColumns = dashboard.columns.map((column) => {
              if (column._id === columnId) {
                return {
                  ...column,
                  cards: [...column.cards, action.payload],
                };
              }
              return column;
            });
            return {
              ...dashboard,
              columns: updatedColumns,
            };
          }
          return dashboard;
        });

        return {
          ...state,
          dashboards: updatedDashboards,
        };
      })
      .addCase(updateCardThunk.pending, handlePending)
      .addCase(updateCardThunk.rejected, handleRejected)
      .addCase(updateCardThunk.fulfilled, (state, action) => {
        const { dashboardId, columnId, _id: cardId } = action.payload;
        const updatedDashboards = state.dashboards.map((dashboard) => {
          if (dashboard._id === dashboardId) {
            const updatedColumns = dashboard.columns.map((column) => {
              if (column._id === columnId) {
                const updatedCards = column.cards.map((card) => {
                  if (card._id === cardId) {
                    return {
                      ...card,
                      ...action.payload,
                    };
                  }
                  return card;
                });

                return {
                  ...column,
                  cards: updatedCards,
                };
              }
              return column;
            });

            return {
              ...dashboard,
              columns: updatedColumns,
            };
          }
          return dashboard;
        });

        return {
          ...state,
          dashboards: updatedDashboards,
        };
      })
      .addCase(deleteCardThunk.pending, handlePending)
      .addCase(deleteCardThunk.rejected, handleRejected)
      .addCase(deleteCardThunk.fulfilled, (state, action) => {
        const { dashboardId, columnId, cardId } = action.payload;
        const updatedDashboards = state.dashboards.map((dashboard) => {
          if (dashboard._id === dashboardId) {
            const updatedColumns = dashboard.columns.map((column) => {
              if (column._id === columnId) {
                const updatedCards = column.cards.filter(
                  (card) => card._id !== cardId
                );
                return {
                  ...column,
                  cards: updatedCards,
                };
              }
              return column;
            });
            return {
              ...dashboard,
              columns: updatedColumns,
            };
          }
          return dashboard;
        });
        return {
          ...state,
          dashboards: updatedDashboards,
        };
      })
      .addCase(updateCardColumnThunk.pending, handlePending)
      .addCase(updateCardColumnThunk.rejected, handleRejected)
      .addCase(updateCardColumnThunk.fulfilled, (state, action) => {
        const { columnId: oldColumnId, data: cardData } = action.payload;
        const updatedDashboards = state.dashboards.map((dashboard) => {
          if (dashboard._id === cardData.dashboardId) {
            const updatedColumns = dashboard.columns.map((column) => {
              if (column._id === oldColumnId) {
                const updatedCards = column.cards.filter(
                  (card) => card._id !== cardData._id
                );

                return {
                  ...column,
                  cards: updatedCards,
                };
              }

              if (column._id === cardData.columnId) {
                return {
                  ...column,
                  cards: [...column.cards, cardData],
                };
              }

              return column;
            });

            return {
              ...dashboard,
              columns: updatedColumns,
            };
          }

          return dashboard;
        });

        return {
          ...state,
          dashboards: updatedDashboards,
        };
      });
  },
});

export const dashboardReducer = dashboardSlice.reducer;
