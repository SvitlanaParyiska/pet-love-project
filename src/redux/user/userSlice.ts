import { createSlice } from "@reduxjs/toolkit";

import {
  getFullCurrentUser,
  logOut,
  signIn,
  signUp,
  userRefresh,
  editUser,
  addUserPet,
  deleteUserPet,
  addUserNotice,
  deleteUserNotice,
} from "./userOperation";
import { UserState } from "../../types/auth";

const initialState: UserState = {
  user: {
    name: "",
    email: "",
    phone: "",
    avatar: "",
    noticesViewed: [],
    noticesFavorites: [],
    pets: [],
  },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};

const userSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    resetStore: () => {
      return { ...initialState };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(signUp.fulfilled, (state, action) => {
        state.user.email = action.payload.email;
        state.user.name = action.payload.name;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(signIn.fulfilled, (state, action) => {
        state.user.email = action.payload.email;
        state.user.name = action.payload.name;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(logOut.fulfilled, (state) => {
        state.user = initialState.user;
        state.isLoggedIn = false;
      })
      .addCase(userRefresh.pending, (state) => {
        state.isRefreshing = true;
      })
      .addCase(userRefresh.rejected, (state) => {
        state.isRefreshing = false;
      })
      .addCase(userRefresh.fulfilled, (state, action) => {
        state.user.email = action.payload.email;
        state.user.name = action.payload.name;
        state.token = action.payload.token;
        state.user.noticesFavorites = action.payload.noticesFavorites || [];
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(getFullCurrentUser.fulfilled, (state, action) => {
        state.user.email = action.payload.email;
        state.user.name = action.payload.name;
        state.token = action.payload.token;
        state.user.noticesFavorites = action.payload.noticesFavorites || [];
        state.user.noticesViewed = action.payload.noticesViewed || [];
        state.user.pets = action.payload.pets || [];
        state.isLoggedIn = true;
      })
      .addCase(editUser.fulfilled, (state, action) => {
        state.user.email = action.payload.email;
        state.user.name = action.payload.name;
        state.token = action.payload.token;
        state.user.noticesFavorites = action.payload.noticesFavorites || [];
        state.user.pets = action.payload.pets || [];
        state.isLoggedIn = true;
      })
      .addCase(addUserPet.fulfilled, (state, action) => {
        state.user.pets = action.payload.pets || [];
        state.isLoggedIn = true;
      })
      .addCase(deleteUserPet.fulfilled, (state, action) => {
        state.user.pets = action.payload.pets || [];
        state.isLoggedIn = true;
      })
      .addCase(addUserNotice.fulfilled, (state, action) => {
        state.user.noticesFavorites = action.payload.noticesFavorites || [];
        state.isLoggedIn = true;
      })
      .addCase(deleteUserNotice.fulfilled, (state, action) => {
        state.user.noticesFavorites = action.payload.noticesFavorites || [];
        state.isLoggedIn = true;
      });
  },
});

export const userReducer = userSlice.reducer;
export const { resetStore } = userSlice.actions;
