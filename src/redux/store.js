import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./auth/authSlice";
import { dashboardReducer } from "./dashboards/dashboardsSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    dashboards: dashboardReducer,
  },
});
