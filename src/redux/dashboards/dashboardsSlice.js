import { createSlice } from "@reduxjs/toolkit";
import {
  fetchAllDashboardsThunk,
  getDashboardByIdThunk,
  addDashboardThunk,
  deleteDashboardThunk,
  updateDashboardThunk,
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
      .addCase(fetchAllDashboardsThunk.fulfilled, (state, action) => {
        state.dashboards = action.payload;
      })
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
          (item) => item._id === action.payload.id
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
      });
  },
});

export const dashboardReducer = dashboardSlice.reducer;
