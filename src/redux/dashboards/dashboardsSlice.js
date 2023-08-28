import { createSlice } from "@reduxjs/toolkit";
import {
  fetchAllDashboardsThunk,
  getDashboardByIdThunk,
  addDashboardThunk,
  deleteDashboardThunk,
  updateDashboardThunk,
} from "../dashboards/operations";

const initialState = {
  dashboards: [],
  dashboardsLength: null,
  isLoading: false,
  error: null,
};

const dashboardSlice = createSlice({
  name: "dashboards",
  initialState,

  reducers: {
    filterAllContacts: (state, { payload }) => {
      state.filter = payload;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchAllDashboardsThunk.fulfilled, (state, action) => {
        state.dashboards = action.payload;
      })
      .addCase(getDashboardByIdThunk.fulfilled, (state, action) => {
        state.dashboards = action.payload;
      })
      .addCase(addDashboardThunk.fulfilled, (state, action) => {
        state.dashboards.push(action.payload);
      })
      .addCase(updateDashboardThunk.fulfilled, (state, action) => {
        state.dashboards = action.payload;
      })
      .addCase(deleteDashboardThunk.fulfilled, (state, action) => {
        const dashboardId = state.dashboards.findIndex(
          (item) => item.id === action.payload
        );
        state.dashboards.splice(dashboardId, 1);
      })
      .addMatcher(
        (action) => action.type.endsWith("/fulfilled"),
        (state) => {
          state.dashboards.isLoading = false;
          state.dashboards.error = null;
        }
      )
      .addMatcher(
        (action) => action.type.endsWith("/pending"),
        (state) => {
          state.dashboards.isLoading = true;
          state.dashboards.error = null;
        }
      )
      .addMatcher(
        (action) => action.type.endsWith("/rejected"),
        (state, action) => {
          state.dashboards.error = action.payload;
          state.dashboards.isLoading = false;
        }
      );
  },
});

export const dashboardReducer = dashboardSlice.reducer;
