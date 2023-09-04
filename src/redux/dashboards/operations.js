import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const instance = axios.create({
  baseURL: "https://taskpro-backend-c73a.onrender.com/",
});

const getToken = () => {
  return localStorage.getItem("accessToken");
};

export const fetchAllDashboardsThunk = createAsyncThunk(
  "dashboards/fetchAll",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await instance.get("api/dashboard");
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const getDashboardByIdThunk = createAsyncThunk(
  "dashboards/getSingleDashboard",
  async (dashboardId, { rejectWithValue }) => {
    try {
      await instance.get(`api/dashboard/${dashboardId}`);
      return dashboardId;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const addDashboardThunk = createAsyncThunk(
  "dashboards/addDashboard",
  async ({ title, icon, background }, { rejectWithValue }) => {
    try {
      const { data } = await instance.post("api/dashboard/", {
        title,
        icon,
        background,
      });
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const deleteDashboardThunk = createAsyncThunk(
  "dashboards/deleteDashboard",
  async (dashboardId, { rejectWithValue }) => {
    try {
      await instance.delete(`api/dashboard/${dashboardId}`);
      return dashboardId;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const updateDashboardThunk = createAsyncThunk(
  "dashboards/update",
  async ({ dashboardId, updateData }, { rejectWithValue }) => {
    try {
      const { data } = await instance.put(`api/dashboard/${dashboardId}`, {
        ...updateData,
      });
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const fetchAllColumnsThunk = createAsyncThunk(
  "columns/fetchAll",
  async (dashboardId, { rejectWithValue }) => {
    try {
      const { data } = await instance.get(`api/column/${dashboardId}`);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const getColumnByIdThunk = createAsyncThunk(
  "columns/getSingleColumn",
  async (columnId, { rejectWithValue }) => {
    try {
      await instance.get(`api/column/${columnId}`);
      return columnId;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const addColumnThunk = createAsyncThunk(
  "columns/addColumn",
  async ({ title, dashboardId }, { rejectWithValue }) => {
    try {
      const { data } = await instance.post(`api/column/${dashboardId}`, {
        title,
        dashboardId,
      });
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const deleteColumnThunk = createAsyncThunk(
  "columns/deleteColumn",
  async ({ columnId, dashboardId }, { rejectWithValue }) => {
    try {
      const token = getToken(); 
      await instance.delete(`api/column/${dashboardId}/${columnId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return { columnId, dashboardId };
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const updateColumnThunk = createAsyncThunk(
  "columns/update",
  async ({ columnId, dashboardId, updateData }, { rejectWithValue }) => {
    try {
      const { data } = await instance.put(
        `api/column/${dashboardId}/${columnId}`,
        {
          ...updateData,
        }
      );
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
