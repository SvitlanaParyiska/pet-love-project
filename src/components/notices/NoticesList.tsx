import { nanoid } from "nanoid";
import NoticesItem from "./NoticesItem";
import clsx from "clsx";

interface NoticesListProps {
  noticesArr: {
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
  }[];
  page: string;
}

const NoticesList = ({ noticesArr, page }: NoticesListProps) => {
  return (
    <ul
      className={clsx(
        "mt-[40px] mb-[44px] tablet:mt-[32px] tablet:mb-[60px] desktop:mt-[40px] flex flex-col gap-[20px] tablet:flex-row tablet:flex-wrap ",
        page === "notice"
          ? "desktop:gap-y-[40px] desktop:gap-x-[32px] desktop:px-[32px]"
          : " desktop:gap-[24px]"
      )}
    >
      {noticesArr.map((item) => (
        <NoticesItem page={page} item={item} key={nanoid()} />
      ))}
    </ul>
  );
};

export default NoticesList;
