import { AppState } from "../../types/auth";
import { PayloadAction } from "@reduxjs/toolkit";

export const handlePending = (state: AppState) => {
  state.isLoading = true;
  state.error = null;
};
export const handleRejected = (
  state: AppState,
  action: PayloadAction<AppState>
) => {
  state.isLoading = false;
  state.error = action.payload;
};
export const handleFulfilled = (state: AppState) => {
  state.isLoading = false;
  state.error = null;
};
