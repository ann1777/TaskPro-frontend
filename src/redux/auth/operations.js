import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
export const instance = axios.create({
  baseURL: "https://taskpro-backend-c73a.onrender.com/",
});

const setAuthHeader = (token) => {
  if (token) {
    instance.defaults.headers.common.Authorization = `Bearer ${token}`;
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
        setAuthHeader(data.token);
        toast.success("Welcome!");
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
      localStorage.setItem("refreshToken", data.token);
      localStorage.setItem("accessToken", data.token);
      toast.success("Welcome!");
      return data;
    } catch (error) {
      toast.error(error.response.data.message);
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
      toast.info("See you soon!");
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const changeTheme = createAsyncThunk(
  "auth/updateTheme",
  async (selectedOption, thunkAPI) => {
    try {
      const { data } = await instance.put("api/auth/updateTheme", {
        theme: selectedOption,
      });
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

    if (!accessToken) {
      return thunkAPI.rejectWithValue("Unable to fetch user");
    }
    try {
      setAuthHeader(accessToken);
      const { data } = await instance.get("api/auth/current");

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const updateUserProfile = createAsyncThunk(
  "auth/updateProfile",
  async ({ name, avatarFile }, thunkAPI) => {
    const uploadToCloudinary = async (file) => {
      const formData = new FormData();
      formData.append('file', file);
      formData.append('upload_preset', 'thb4n5sd');

      const response = await fetch('https://api.cloudinary.com/v1_1/doc0gvy9u/upload', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();
      return data.secure_url; 
    };

    try {
      let avatarURL;
      if (avatarFile) {
        avatarURL = await uploadToCloudinary(avatarFile);
      }

      const { data } = await instance.put("api/auth/updatedata", {
        name,
        avatarURL
      });

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export default instance;
