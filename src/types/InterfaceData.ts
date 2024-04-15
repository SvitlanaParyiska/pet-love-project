export interface EditUserForm {
  name: string;
  email: string;
  phone: string;
  avatar: string;
}

export interface AddPetForm {
  name: string;
  title: string;
  imgURL: string;
  species: string;
  birthday: string;
  sex: string;
}

export interface DataBaseState {
  notices: null | {
    page: number;
    perPage: number;
    totalPages: number;
    results: object[];
  };
  noticesCategories: [] | string[];
  noticesSex: [] | string[];
  noticesSpecies: [] | string[];
  notice: null | object;
  cities: [];
  friends: [];
  news: null | {
    page: number;
    perPage: number;
    totalPages: number;
    results: object[];
  };
}
