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
  async (_id, { rejectWithValue }) => {
    try {
      await instance.get(`api/dashboard/${_id}`);
      return id;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const addDashboardThunk = createAsyncThunk(
  "dashboards/addDashboard",
  async ({ name, avatar, theme, owner }, { rejectWithValue }) => {
    try {
      const { data } = await instance.post("api/dashboards", {
        name,
        avatar,
        theme,
        owner,
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
      await instance.put(`api/dashboards/${id}`, { id, updateData });
      return id;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
