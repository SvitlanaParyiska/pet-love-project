import { UserState } from "../../types/auth";

export const selectToken = (state: { auth: UserState }) => state.auth.token;

export const selectFullUser = (state: { auth: UserState }) => state.auth.user;

export const selectUserName = (state: { auth: UserState }) =>
  state.auth.user.name;

export const selectUserAvatar = (state: { auth: UserState }) =>
  state.auth.user.avatar;

export const selectUserFavorites = (state: { auth: UserState }) =>
  state.auth.user.noticesFavorites;

export const selectUserFavoritesId = (state: { auth: UserState }) =>
  state.auth.user.favId;

export const selectUserViewed = (state: { auth: UserState }) =>
  state.auth.user.noticesViewed;

export const selectIsLoggedIn = (state: { auth: UserState }) =>
  state.auth.isLoggedIn;

export const selectIsRefreshing = (state: { auth: UserState }) =>
  state.auth.isRefreshing;

export const selectUserPets = (state: { auth: UserState }) =>
  state.auth.user.pets;
