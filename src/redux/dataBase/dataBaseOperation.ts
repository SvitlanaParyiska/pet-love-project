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
  async (body: { page: number; filter: string }, thunkAPI) => {
    try {
      const data = await getNotices(body.page, body.filter);
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
  async (body: { page: number; filter: string }, thunkAPI) => {
    try {
      const data = await getNews(body.page, body.filter);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
