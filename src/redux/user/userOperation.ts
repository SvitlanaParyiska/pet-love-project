import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from "../store";
import { EditUserForm, AddPet } from "../../types/InterfaceData";
import { SignIn, SignUp } from "../../types/auth";
import {
  addNotice,
  addPet,
  currentUser,
  deleteNotice,
  deletePet,
  fullUser,
  login,
  logout,
  profileEdit,
  register,
} from "../../api/authApi";

export const setToken = {
  set(token: string) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = "";
  },
};

export const signUp = createAsyncThunk(
  "auth/signup",
  async (body: SignUp, thunkAPI) => {
    try {
      const data = await register(body);
      setToken.set(data.token);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const signIn = createAsyncThunk(
  "auth/signin",
  async (body: SignIn, thunkAPI) => {
    try {
      const data = await login(body);
      setToken.set(data.token);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const userRefresh = createAsyncThunk(
  "auth/refresh",
  async (_, thunkAPI) => {
    const { auth } = thunkAPI.getState() as RootState;
    if (!auth.token) {
      return thunkAPI.rejectWithValue("Error, no valid token");
    }
    setToken.set(auth.token);
    try {
      const data = await currentUser();
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const getFullCurrentUser = createAsyncThunk(
  "auth/getFullUser",
  async (_, thunkAPI) => {
    try {
      const data = await fullUser();
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const editUser = createAsyncThunk(
  "auth/editUser",
  async (body: EditUserForm, thunkAPI) => {
    try {
      const data = await profileEdit(body);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const addUserPet = createAsyncThunk(
  "auth/addPet",
  async (body: AddPet, thunkAPI) => {
    try {
      const data = await addPet(body);
      console.log(data);
      return data;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const deleteUserPet = createAsyncThunk(
  "auth/deletePet",
  async (id: string, thunkAPI) => {
    try {
      const data = await deletePet(id);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const addUserNotice = createAsyncThunk(
  "auth/addNotice",
  async (id: string, thunkAPI) => {
    try {
      const data = await addNotice(id);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const deleteUserNotice = createAsyncThunk(
  "auth/deleteNotice",
  async (id: string, thunkAPI) => {
    try {
      const data = await deleteNotice(id);
      return { data, id };
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const logOut = createAsyncThunk("auth/logout", async (_, thunkAPI) => {
  try {
    const data = await logout();
    setToken.unset();
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});
