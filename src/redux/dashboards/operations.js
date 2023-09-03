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
      await instance.delete(`api/column/${dashboardId}/${columnId}`);
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

export const fetchAllCardsThunk = createAsyncThunk(
  "cards/fetchAll",
  async (columnId, { rejectWithValue }) => {
    try {
      const { data } = await instance.get(`api/card/${columnId}`);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const getCardByIdThunk = createAsyncThunk(
  "cards/getSingleCard",
  async (cardId, { rejectWithValue }) => {
    try {
      await instance.get(`api/cards/${cardId}`);
      return cardId;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const addCardThunk = createAsyncThunk(
  "cards/addCard",
  async (payload, { rejectWithValue }) => {
    try {
      const { data } = await instance.post(`api/card/${payload.columnId}`, {
        ...payload,
      });
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const deleteCardThunk = createAsyncThunk(
  "cards/deleteCard",
  async ({ columnId, dashboardId, cardId }, { rejectWithValue }) => {
    try {
      await instance.delete(`api/card/${columnId}/${cardId}`);
      return { columnId, dashboardId, cardId };
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const updateCardThunk = createAsyncThunk(
  "cards/update",
  async ({ columnId, cardId, updateData }, { rejectWithValue }) => {
    try {
      const { data } = await instance.put(`api/card/${columnId}/${cardId}`, {
        ...updateData,
      });
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const updateCardColumnThunk = createAsyncThunk(
  "cards/updateCardColumn",
  async ({ columnId, cardId, newColumnId }, { rejectWithValue }) => {
    try {
      const { data } = await instance.put(`api/card/${columnId}/${cardId}`, {
        columnId: newColumnId,
      });
      return { data, columnId };
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
