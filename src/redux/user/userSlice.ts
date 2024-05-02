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
import { Item, UserState } from "../../types/auth";

const initialState: UserState = {
  user: {
    name: "",
    email: "",
    phone: "",
    avatar: "",
    noticesViewed: [],
    noticesFavorites: [],
    favId: [],
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
      .addCase(userRefresh.fulfilled, (state, { payload }) => {
        state.user.email = payload.email;
        state.user.name = payload.name;
        state.token = payload.token;
        state.user.noticesFavorites = payload.noticesFavorites || [];
        state.user.favId = payload.noticesFavorites.map(
          (item: Item) => item._id
        );
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(getFullCurrentUser.fulfilled, (state, { payload }) => {
        state.user.email = payload.email;
        state.user.name = payload.name;
        state.token = payload.token;
        state.user.avatar = payload.avatar;
        state.user.phone = payload.phone;
        state.user.noticesFavorites = payload.noticesFavorites || [];
        state.user.noticesViewed = payload.noticesViewed || [];
        state.user.favId = payload.noticesFavorites.map(
          (item: Item) => item._id
        );
        state.user.pets = payload.pets || [];
        state.isLoggedIn = true;
      })
      .addCase(editUser.fulfilled, (state, { payload }) => {
        state.user.email = payload.email;
        state.user.name = payload.name;
        state.token = payload.token;
        state.user.noticesFavorites = payload.noticesFavorites || [];
        state.user.favId = payload.noticesFavorites.map(
          (item: Item) => item._id
        );
        state.user.pets = payload.pets || [];
      })
      .addCase(addUserPet.fulfilled, (state, { payload }) => {
        state.user.pets = payload.pets || [];
      })
      .addCase(deleteUserPet.fulfilled, (state, { payload }) => {
        state.user.pets = payload.pets || [];
      })
      .addCase(addUserNotice.fulfilled, (state, { payload }) => {
        state.user.favId = payload || [];
      })
      .addCase(deleteUserNotice.fulfilled, (state, { payload }) => {
        state.user.favId = payload || [];
      });
  },
});

export const userReducer = userSlice.reducer;
export const { resetStore } = userSlice.actions;
