export interface EditUserForm {
  name: string;
  email: string;
  phone: string;
  avatar: string;
}

export interface AddPet {
  name: string;
  title: string;
  imgURL: string;
  species: string;
  birthday: string;
  sex: string;
}

interface NewItem {
  _id: string;
  imgUrl: string;
  title: string;
  text: string;
  date: string;
  url: string;
  id: string;
}

export interface Days {
  _id: string;
  isOpen: boolean;
  from: string;
  to: string;
}

export interface FriendItem {
  _id: string;
  title: string;
  url: string;
  addressUrl: string;
  imageUrl: string;
  address: string;
  workDays: null | Days[] | [];
  phone: string;
  email: string;
}

export interface NoticeItem {
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

export interface DataBaseState {
  notices: null | {
    page: number;
    perPage: number;
    totalPages: number;
    results: NoticeItem[];
  };
  noticesCategories: [] | string[];
  noticesSex: [] | string[];
  noticesSpecies: [] | string[];
  notice: null | object;
  cities: [];
  friends: [] | FriendItem[];
  news: null | {
    page: number;
    perPage: number;
    totalPages: number;
    results: NewItem[];
  };
}
