import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { logOut, signIn, signUp, userRefresh } from "./userOperation";
import { User, UserState } from "../../types/auth";

const initialState: UserState = {
  user: {
    name: "",
    email: "",
    phone: "",
    avatar: "",
    token: null,
    notices: [],
    pets: [],
  },
  isLoading: false,
  isLoggedIn: false,
  isRefreshing: false,
  error: "",
};

const handlePendingAction = (state: UserState) => {
  state.isLoading = true;
  state.error = null;
};

const handleRejectedAction = (
  state: UserState,
  { payload }: { payload: Error }
) => {
  state.isLoading = false;
  state.error = payload;
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(signUp.fulfilled, (state, action: PayloadAction<User>) => {
        state.isLoading = false;
        state.user = action.payload;
        state.isLoggedIn = true;
      })
      .addCase(signIn.fulfilled, (state, action: PayloadAction<User>) => {
        state.isLoading = false;
        state.user = action.payload;
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
        state.user = action.payload;
        state.isLoggedIn = true;
      })
      .addMatcher(
        (action) => action.type.endsWith("/pending"),
        handlePendingAction
      )
      .addMatcher(
        (action) => action.type.endsWith("/rejected"),
        handleRejectedAction
      );
  },
});

export const userReducer = userSlice.reducer;
