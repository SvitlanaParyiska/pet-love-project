import axios from "axios";
import { SignIn, SignUp } from "../types/auth";
import { AddPet, EditUserForm } from "../types/InterfaceData";

axios.defaults.baseURL = "https://petlove.b.goit.study/api/";

export const register = async (body: SignUp) => {
  const { data } = await axios.post("users/signup", body);
  return data;
};

export const login = async (body: SignIn) => {
  const { data } = await axios.post("users/signin", body);
  return data;
};

export const logout = async () => {
  const { data } = await axios.post("users/signout");
  return data;
};

export const currentUser = async () => {
  const { data } = await axios.get("users/current");
  return data;
};

export const fullUser = async () => {
  const { data } = await axios.get("users/current/full");
  return data;
};

export const profileEdit = async (body: EditUserForm) => {
  const { data } = await axios.patch("users/current/edit", body);
  return data;
};

export const addPet = async (pet: AddPet) => {
  const { data } = await axios.post("users/current/pets/add", pet);
  return data;
};

export const deletePet = async (id: string) => {
  const { data } = await axios.delete(`users/current/pets/remove/${id}`);
  return data;
};

export const addNotice = async (id: string) => {
  const { data } = await axios.post(`notices/favorites/add/${id}`);
  return data;
};

export const deleteNotice = async (id: string) => {
  const { data } = await axios.delete(`notices/favorites/remove/${id}`);
  return data;
};
