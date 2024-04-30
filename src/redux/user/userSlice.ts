import { PayloadAction, createSlice } from "@reduxjs/toolkit";

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
import { User, UserState } from "../../types/auth";

const initialState: UserState = {
  user: {
    name: "",
    email: "",
    phone: "",
    avatar: "",
    token: null,
    noticesViewed: [],
    noticesFavorites: [],
    pets: [],
  },
  isLoggedIn: true,
  isRefreshing: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    resetStore: () => {
      return { ...initialState };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(signUp.fulfilled, (state, action: PayloadAction<User>) => {
        state.user.email = action.payload.email;
        state.user.name = action.payload.name;
        state.user.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(signIn.fulfilled, (state, action: PayloadAction<User>) => {
        state.user.email = action.payload.email;
        state.user.name = action.payload.name;
        state.user.token = action.payload.token;
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
      .addCase(userRefresh.fulfilled, (state, action: PayloadAction<User>) => {
        state.isRefreshing = false;
        state.user.email = action.payload.email;
        state.user.name = action.payload.name;
        state.user.token = action.payload.token;
        state.user.noticesFavorites = action.payload.noticesFavorites || [];
        state.isLoggedIn = true;
      })
      .addCase(
        getFullCurrentUser.fulfilled,
        (state, action: PayloadAction<User>) => {
          state.user.email = action.payload.email;
          state.user.name = action.payload.name;
          state.user.token = action.payload.token;
          state.user.noticesFavorites = action.payload.noticesFavorites || [];
          state.user.pets = action.payload.pets || [];
          state.isLoggedIn = true;
        }
      )
      .addCase(editUser.fulfilled, (state, action: PayloadAction<User>) => {
        state.user.email = action.payload.email;
        state.user.name = action.payload.name;
        state.user.token = action.payload.token;
        state.user.noticesFavorites = action.payload.noticesFavorites || [];
        state.user.pets = action.payload.pets || [];
        state.isLoggedIn = true;
      })
      .addCase(addUserPet.fulfilled, (state, action: PayloadAction<User>) => {
        state.user.pets = action.payload.pets || [];
        state.isLoggedIn = true;
      })
      .addCase(
        deleteUserPet.fulfilled,
        (state, action: PayloadAction<User>) => {
          state.user.pets = action.payload.pets || [];
          state.isLoggedIn = true;
        }
      )
      .addCase(
        addUserNotice.fulfilled,
        (state, action: PayloadAction<User>) => {
          state.user.noticesFavorites = action.payload.noticesFavorites || [];
          state.isLoggedIn = true;
        }
      )
      .addCase(
        deleteUserNotice.fulfilled,
        (state, action: PayloadAction<User>) => {
          state.user.noticesFavorites = action.payload.noticesFavorites || [];
          state.isLoggedIn = true;
        }
      );
  },
});

export const userReducer = userSlice.reducer;
export const { resetStore } = userSlice.actions;
