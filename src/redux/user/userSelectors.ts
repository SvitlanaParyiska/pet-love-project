import { UserState } from "../../types/auth";

export const selectToken = (state: { user: UserState }) =>
  state.user.user.token;

export const selectUser = (state: { user: UserState }) => state.user.user;

export const selectIsLoading = (state: { user: UserState }) =>
  state.user.isLoading;

export const selectIsLoggedIn = (state: { user: UserState }) =>
  state.user.isLoggedIn;

export const selectIsRefreshing = (state: { user: UserState }) =>
  state.user.isRefreshing;

export const selectUserPets = (state: { user: UserState }) =>
  state.user.user.pets;
