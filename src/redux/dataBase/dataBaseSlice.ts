import { createSlice } from "@reduxjs/toolkit";
import { DataBaseState } from "../../types/InterfaceData";
import { getAllFriends, getAllNotices } from "./dataBaseOperation";

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
      .addCase(getAllFriends.fulfilled, (state, action) => {
        state.friends = action.payload;
      });
  },
});

export const dataBaseReducer = dataBaseSlice.reducer;
