import { AppState } from "../../types/auth";

export const selectIsLoading = (state: { app: AppState }) =>
  state.app.isLoading;
export const selectError = (state: { app: AppState }) => state.app.error;
