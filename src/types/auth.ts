export interface User {
  name: string;
  email: string;
  phone: string;
  avatar: string;
  token: null | string;
  noticesViewed?: [];
  noticesFavorites?: [];
  pets?: [];
}

export interface SignUp {
  name: string;
  email: string;
  password: string;
}

export interface SignIn extends Omit<SignUp, "name"> {}

export interface UserState {
  user: User;
  isLoading: boolean;
  isLoggedIn: boolean;
  isRefreshing: boolean;
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
