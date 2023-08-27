import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
const instance = axios.create({
  baseURL: "https://taskpro-backend-c73a.onrender.com/",
});

const setAuthHeader = (token) => {
  if (token) {
    console.log(token);
    return (instance.defaults.headers.common.Authorization = `Bearer ${token}`);
  }
};

export const signup = createAsyncThunk(
  "auth/signup",
  async (credentials, thunkAPI) => {
    try {
      const res = await instance.post("api/auth/signup", credentials);
      if (res.status === 201) {
        const { email, password } = credentials;
        const { data } = await instance.post("api/auth/signin", {
          email,
          password,
        });
        console.log("we do it");
        setAuthHeader(data.accessToken);
        return data;
      }
    } catch (error) {
      toast.error(error.response.data.message);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const signin = createAsyncThunk(
  "auth/signin",
  async (credentials, thunkAPI) => {
    try {
      const { data } = await instance.post("api/auth/signin", credentials);

      setAuthHeader(data.accessToken);
      console.log("we do it");
      sessionStorage.setItem("refreshToken", data.refreshToken);
      sessionStorage.setItem("accessToken", data.accessToken);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logOut = createAsyncThunk("auth/logout", async (_, thunkAPI) => {
  try {
    await instance.post("api/auth/logout");
    sessionStorage.clear("refreshToken");
    sessionStorage.clear("accessToken");
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export default instance;
