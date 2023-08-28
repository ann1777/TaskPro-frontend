import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
const instance = axios.create({
  baseURL: "https://taskpro-backend-c73a.onrender.com/",
});

const setAuthHeader = (token) => {
  if (token) {
    instance.defaults.headers.common.Authorization = `Bearer ${token}`;
  }
};





const setAuthTheme = (theme) => {
  if (theme) {
    instance.defaults.headers.common.Theme = theme;
  }
};

const unsetAuthHeader = () => {
  instance.defaults.headers.common.Authorization = "";
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
           setAuthHeader(data.token);
      console.log("we do it");
      localStorage.setItem("refreshToken", data.token);
      localStorage.setItem("accessToken", data.token);
      setAuthTheme({ theme: data.user.theme });
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const signOut = createAsyncThunk(
  "auth/signout",
  async (credentials, thunkAPI) => {
    try {
      const { data } = await instance.post("api/auth/signout", credentials);
      localStorage.clear("refreshToken");
      localStorage.clear("accessToken");
      unsetAuthHeader();
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const changeTheme = createAsyncThunk(
  "auth/updateTheme",
  async ({ theme }, thunkAPI) => {
    try {
      const { data } = await instance.put("api/auth/updateTheme", { theme });
      await thunkAPI.dispatch(setAuthTheme({ theme: data.user.theme }));
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const currentUser = createAsyncThunk(
  "auth/current",
  async (_, thunkAPI) => {
    const accessToken = localStorage.getItem("accessToken");
    console.log("accessToken:", accessToken)
    
    if (!accessToken) {
      return thunkAPI.rejectWithValue("Unable to fetch user");
    }

    setAuthHeader(accessToken);
    try {
      const { data } = await instance.get("api/auth/current");
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export default instance;
