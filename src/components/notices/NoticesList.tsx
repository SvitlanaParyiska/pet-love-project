import { nanoid } from "nanoid";
import NoticesItem from "./NoticesItem";

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
}

const NoticesList = ({ noticesArr }: NoticesListProps) => {
  return (
    <ul className="mt-[40px] mb-[44px] tablet:mt-[32px] tablet:mb-[60px] desktop:mt-[40px] flex flex-col gap-[20px] items-center tablet:flex-row tablet:flex-wrap tablet:gap-[20px] desktop:gap-y-[40px] desktop:gap-x-[32px]">
      {noticesArr.map((item) => (
        <NoticesItem item={item} key={nanoid()} />
      ))}
    </ul>
  );
};

export default NoticesList;
