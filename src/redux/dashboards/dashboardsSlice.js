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
        const indexDashboard = state.dashboards.findIndex(
          (item) => item._id === action.payload.dashboardId
        );
        state.dashboards[indexDashboard].push(action.payload);
      })
      .addCase(updateColumnThunk.pending, handlePending)
      .addCase(updateColumnThunk.rejected, handleRejected)
      .addCase(updateColumnThunk.fulfilled, (state, action) => {
        const indexDashboard = state.dashboards.findIndex(
          (item) => item._id === action.payload.dashboardId
        );
        const indexColumn = state.dashboards[indexDashboard].columns.findIndex(
          (item) => item._id === action.payload._id
        );
        state.dashboards[indexDashboard].columns[indexColumn] = action.payload;
      })
      .addCase(deleteColumnThunk.pending, handlePending)
      .addCase(deleteColumnThunk.rejected, handleRejected)
      .addCase(deleteColumnThunk.fulfilled, (state, action) => {
        const indexDashboard = state.dashboards.findIndex(
          (item) => item._id === action.payload.dashboardId
        );
        const indexColumn = state.dashboards[indexDashboard].columns.findIndex(
          (item) => item._id === action.payload.columnId
        );
        state.dashboards[indexDashboard].splice(indexColumn, 1);
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
        const indexDashboard = state.dashboards.findIndex(
          (item) => item._id === action.payload.dashboardId
        );
        const indexColumn = state.dashboards[indexDashboard].columns.findIndex(
          (item) => item._id === action.payload.columnId
        );
        state.dashboards[indexDashboard].columns[indexColumn].push(
          action.payload
        );
      })
      .addCase(updateCardThunk.pending, handlePending)
      .addCase(updateCardThunk.rejected, handleRejected)
      .addCase(updateCardThunk.fulfilled, (state, action) => {
        const indexDashboard = state.dashboards.findIndex(
          (item) => item._id === action.payload.dashboardId
        );
        const indexColumn = state.dashboards[indexDashboard].columns.findIndex(
          (item) => item._id === action.payload.columnId
        );
        const indexCard = state.dashboards[indexDashboard].columns[
          indexColumn
        ].cards.findIndex((item) => item._id === action.payload._id);
        state.dashboards[indexDashboard].columns[indexColumn].cards[indexCard] =
          action.payload;
      })
      .addCase(deleteCardThunk.pending, handlePending)
      .addCase(deleteCardThunk.rejected, handleRejected)
      .addCase(deleteCardThunk.fulfilled, (state, action) => {
        const indexDashboard = state.dashboards.findIndex(
          (item) => item._id === action.payload.dashboardId
        );
        const indexColumn = state.dashboards[indexDashboard].columns.findIndex(
          (item) => item._id === action.payload.columnId
        );
        const indexCard = state.dashboards[indexDashboard].columns[
          indexColumn
        ].cards.findIndex((item) => item._id === action.payload.cardId);
        state.dashboards[indexDashboard].columns[indexColumn].splice(
          indexCard,
          1
        );
      })
      .addCase(updateCardColumnThunk.pending, handlePending)
      .addCase(updateCardColumnThunk.rejected, handleRejected)
      .addCase(updateCardColumnThunk.fulfilled, (state, action) => {
        const indexDashboard = state.dashboards.findIndex(
          (item) => item._id === action.payload.data.dashboardId
        );

        const indexOldColumn = state.dashboards[
          indexDashboard
        ].columns.findIndex((item) => item._id === action.payload.columnId);

        const indexNewColumn = state.dashboards[
          indexDashboard
        ].columns.findIndex(
          (item) => item._id === action.payload.data.columnId
        );

        const indexCard = state.dashboards[indexDashboard].columns[
          indexOldColumn
        ].cards.findIndex((item) => item._id === action.payload.data._id);

        state.dashboards[indexDashboard].columns[indexOldColumn].splice(
          indexCard,
          1
        );

        state.dashboards[indexDashboard].columns[indexNewColumn].push(
          action.payload.data
        );
      });
  },
});

export const dashboardReducer = dashboardSlice.reducer;
