import { Days } from "../types/InterfaceData";

export const addressLength = (text: string) => {
  if (text.length > 21) {
    return text.slice(0, 19) + "...";
  } else return text;
};

export const workTime = (
  week:
    | {
        _id: string;
        isOpen: boolean;
        from: string;
        to: string;
      }[]
    | null
    | []
) => {
  return week?.find((day) => day.from);
};

export const workDaysIs = (days: null | Days[] | []) => {
  if (days === null) {
    return false;
  } else if (days.length === 0) {
    return false;
  } else return true;
};
