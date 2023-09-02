import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const instance = axios.create({
  baseURL: "https://taskpro-backend-c73a.onrender.com/",
});

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
  async (id, { rejectWithValue }) => {
    try {
      await instance.get(`api/dashboard/${id}`);
      return id;
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
  async (id, { rejectWithValue }) => {
    try {
      await instance.delete(`api/dashboards/${id}`);
      return id;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const updateDashboardThunk = createAsyncThunk(
  "dashboards/update",
  async ({ id, updateData }, { rejectWithValue }) => {
    try {
      const { data } = await instance.put(`api/dashboards/${id}`, {
        ...updateData,
      });
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
