import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  getCities,
  getFriends,
  getNews,
  getNotices,
  getNoticesById,
  getNoticesCategory,
  getNoticesSex,
  getNoticesSpecies,
} from "../../api/dataBaseApi";

export const getAllNotices = createAsyncThunk(
  "database/allNotices",
  async (_, thunkAPI) => {
    try {
      const data = await getNotices();
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const getCategories = createAsyncThunk(
  "database/categories",
  async (_, thunkAPI) => {
    try {
      const data = await getNoticesCategory();
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const getSex = createAsyncThunk("database/sex", async (_, thunkAPI) => {
  try {
    const data = await getNoticesSex();
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

export const getSpecies = createAsyncThunk(
  "database/species",
  async (_, thunkAPI) => {
    try {
      const data = await getNoticesSpecies();
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const getNotice = createAsyncThunk(
  "database/notice",
  async (id: string, thunkAPI) => {
    try {
      const data = await getNoticesById(id);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const getAllCities = createAsyncThunk(
  "database/cities",
  async (_, thunkAPI) => {
    try {
      const data = await getCities();
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const getAllFriends = createAsyncThunk(
  "database/friends",
  async (_, thunkAPI) => {
    try {
      const data = await getFriends();
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const getAllNews = createAsyncThunk(
  "database/news",
  async (_, thunkAPI) => {
    try {
      const data = await getNews();
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
