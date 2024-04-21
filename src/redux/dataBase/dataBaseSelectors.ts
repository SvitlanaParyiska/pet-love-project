import { DataBaseState } from "../../types/InterfaceData";

export const selectNotices = (state: { dataBase: DataBaseState }) =>
  state.dataBase.notices;

export const selectNoticesCategories = (state: { dataBase: DataBaseState }) =>
  state.dataBase.noticesCategories;

export const selectNoticesSex = (state: { dataBase: DataBaseState }) =>
  state.dataBase.noticesSex;

export const selectNoticesSpecies = (state: { dataBase: DataBaseState }) =>
  state.dataBase.noticesSpecies;

export const selectNotice = (state: { dataBase: DataBaseState }) =>
  state.dataBase.notice;

export const selectCities = (state: { dataBase: DataBaseState }) =>
  state.dataBase.cities;

export const selectFriends = (state: { dataBase: DataBaseState }) =>
  state.dataBase.friends;

export const selectNews = (state: { dataBase: DataBaseState }) =>
  state.dataBase.news;
