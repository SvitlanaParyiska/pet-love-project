import { NoticeItem } from "../types/InterfaceData";
import { Item } from "../types/auth";

export const getBirthday = (data: string) => {
  const formatDate = new Date(data);
  const year = formatDate.getFullYear().toString();
  const month = (formatDate.getMonth() + 1).toString();
  const day = formatDate.getDate().toString();
  return `${day.padStart(2, "0")}.${month.padStart(2, "0")}.${year}`;
};

export const getArrayWithFav = (arrFav: Item[], arrNotice: NoticeItem[]) => {
  const newArray = arrNotice.map((item) => {
    if (arrFav.find((favItem) => favItem._id === item._id)) {
      return { item, favorite: true };
    } else return { item, favorite: false };
  });

  return newArray;
};
