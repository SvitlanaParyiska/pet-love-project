import { createSlice } from "@reduxjs/toolkit";
import { DataBaseState } from "../../types/InterfaceData";

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
    builder;
    //   .addCase(signUp.fulfilled, (state, action: PayloadAction<User>) => {
    //     state.isLoading = false;
    //     state.user = action.payload;
    //   })
    //   .addCase(signIn.fulfilled, (state, action: PayloadAction<User>) => {
    //     state.isLoading = false;
    //     state.user = action.payload;
    //   })
    //   .addCase(logOut.fulfilled, (state) => {
    //     state.user = initialState.user;
    //   })
    //   .addCase(userRefresh.pending, (state) => {
    //     state.isRefreshing = true;
    //   })
    //   .addCase(userRefresh.rejected, (state) => {
    //     state.isRefreshing = false;
    //   })
    //   .addCase(userRefresh.fulfilled, (state, action: PayloadAction<User>) => {
    //     state.isRefreshing = false;
    //     state.user = action.payload;
    //   })
    //   .addMatcher(
    //     (action) => action.type.endsWith("/pending"),
    //     handlePendingAction
    //   )
    //   .addMatcher(
    //     (action) => action.type.endsWith("/rejected"),
    //     handleRejectedAction
    //   );
  },
});

export const dataBaseReducer = dataBaseSlice.reducer;
