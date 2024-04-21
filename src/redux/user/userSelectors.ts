import { UserState } from "../../types/auth";

export const selectToken = (state: { user: UserState }) =>
  state.user.user.token;

export const selectUserName = (state: { user: UserState }) =>
  state.user.user.name;

export const selectUserAvatar = (state: { user: UserState }) =>
  state.user.user.avatar;

export const selectIsLoading = (state: { user: UserState }) =>
  state.user.isLoading;

export const selectIsLoggedIn = (state: { user: UserState }) =>
  state.user.isLoggedIn;

export const selectIsRefreshing = (state: { user: UserState }) =>
  state.user.isRefreshing;

export const selectUserPets = (state: { user: UserState }) =>
  state.user.user.pets;
