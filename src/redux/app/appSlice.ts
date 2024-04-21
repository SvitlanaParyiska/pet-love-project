import { createSlice } from "@reduxjs/toolkit";
import { AppState } from "../../types/auth";
import { handleFulfilled, handlePending, handleRejected } from "./appHelpers";

export const initialState: AppState = {
  isLoading: false,
  error: null,
};

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addMatcher((action) => action.type.endsWith("/pending"), handlePending)
      .addMatcher((action) => action.type.endsWith("/rejected"), handleRejected)
      .addMatcher(
        (action) => action.type.endsWith("/fulfilled"),
        handleFulfilled
      );
  },
});

export const appReducer = appSlice.reducer;
