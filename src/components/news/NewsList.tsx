import { nanoid } from "nanoid";
import NewsItem from "./NewsItem";

interface NewListProps {
  newsArr: {
    _id: string;
    imgUrl: string;
    title: string;
    text: string;
    date: string;
    url: string;
    id: string;
  }[];
}

function NewsList({ newsArr }: NewListProps) {
  return (
    <ul className="mt-[24px] flex flex-col gap-[24px] items-center tablet:flex-row tablet:flex-wrap tablet:gap-y-[32px] tablet:gap-x-[24px] desktop:gap-y-[40px] desktop:gap-x-[35px]">
      {newsArr.map((item) => (
        <NewsItem item={item} key={nanoid()} />
      ))}
    </ul>
  );
}

export default NewsList;
