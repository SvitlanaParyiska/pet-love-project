export interface User {
  name: string;
  email: string;
  phone: string;
  avatar: string;
  noticesViewed: Item[] | [];
  noticesFavorites: Item[] | [];
  pets?: [];
}

export interface SignUp {
  name: string;
  email: string;
  password: string;
}

export interface SignUpForm {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export interface SignIn {
  email: string;
  password: string;
}

export interface UserState {
  user: User;
  token: null | string;
  isLoggedIn: boolean;
  isRefreshing: boolean;
}

export interface AppState {
  isLoading: boolean;
  error: string | null | unknown;
}

export interface AuthResponse extends User {
  token: string;
}

export interface Error {
  message: string;
}

export interface LogOutResponse {
  message: string;
}

export interface Item {
  _id: string;
  species: string;
  category: string;
  title: string;
  name: string;
  birthday: string;
  comment: string;
  sex: string;
  location: string;
  imgURL: string;
  createdAt: string;
  user: string;
  popularity: number;
  updatedAt?: string;
}
