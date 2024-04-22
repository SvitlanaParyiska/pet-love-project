import { createSlice } from "@reduxjs/toolkit";
import { DataBaseState } from "../../types/InterfaceData";
import {
  getAllCities,
  getAllFriends,
  getAllNews,
  getAllNotices,
  getCategories,
  getNotice,
  getSex,
  getSpecies,
} from "./dataBaseOperation";

const initialState: DataBaseState = {
  notices: null,
  noticesCategories: [],
  noticesSex: [],
  noticesSpecies: [],
  notice: null,
  cities: [],
  friends: [],
  news: null,
};

const dataBaseSlice = createSlice({
  name: "dataBase",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllNotices.fulfilled, (state, action) => {
        state.notices = action.payload.results;
      })
      .addCase(getCategories.fulfilled, (state, action) => {
        state.noticesCategories = action.payload;
      })
      .addCase(getSex.fulfilled, (state, action) => {
        state.noticesSex = action.payload;
      })
      .addCase(getSpecies.fulfilled, (state, action) => {
        state.noticesSpecies = action.payload;
      })
      .addCase(getNotice.fulfilled, (state, action) => {
        state.notice = action.payload;
      })
      .addCase(getAllCities.fulfilled, (state, action) => {
        state.cities = action.payload;
      })
      .addCase(getAllFriends.fulfilled, (state, action) => {
        state.friends = action.payload;
      })
      .addCase(getAllNews.fulfilled, (state, action) => {
        state.news = action.payload;
      });
  },
});

export const dataBaseReducer = dataBaseSlice.reducer;
