import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from "../store";
import { EditUserForm, AddPetForm } from "../../types/InterfaceData";
import { SignIn, SignUp } from "../../types/auth";

axios.defaults.baseURL = "https://petlove.b.goit.study/api";

const setAuthHeader = (token: string) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = "";
};

export const signUp = createAsyncThunk(
  "auth/signup",
  async (data: SignUp, thunkAPI) => {
    try {
      const response = await axios.post("/users/signup", data);
      setAuthHeader(response.data.token);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const signIn = createAsyncThunk(
  "auth/signin",
  async (data: SignIn, thunkAPI) => {
    try {
      const response = await axios.post("/users/signin", data);
      setAuthHeader(response.data.token);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const userRefresh = createAsyncThunk(
  "auth/refresh",
  async (_, thunkAPI) => {
    const { user } = thunkAPI.getState() as RootState;

    if (!user.user.token) {
      return thunkAPI.rejectWithValue("Error, no valid token");
    }
    setAuthHeader(user.user.token);
    try {
      const response = await axios.get("/users/current");
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const getFullCurrentUser = createAsyncThunk(
  "auth/getFullUser",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("/users/current/full");
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const editUser = createAsyncThunk(
  "auth/editUser",
  async (data: EditUserForm, thunkAPI) => {
    try {
      const response = await axios.patch("/users/current/edit", data);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const addUserPet = createAsyncThunk(
  "auth/addPet",
  async (data: AddPetForm, thunkAPI) => {
    try {
      const response = await axios.post("users/current/pets/add", data);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const deleteUserPet = createAsyncThunk(
  "auth/deletePet",
  async (id: string, thunkAPI) => {
    try {
      const response = await axios.delete(`users/current/pets/remove/${id}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const addUserNotice = createAsyncThunk(
  "auth/addNotice",
  async (id: string, thunkAPI) => {
    try {
      const response = await axios.post(`/notices/favorites/add/${id}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const deleteUserNotice = createAsyncThunk(
  "auth/deleteNotice",
  async (id: string, thunkAPI) => {
    try {
      const response = await axios.delete(`/notices/favorites/remove/${id}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const logOut = createAsyncThunk("auth/logout", async (_, thunkAPI) => {
  try {
    await axios.post("/users/signout");
    clearAuthHeader();
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});
