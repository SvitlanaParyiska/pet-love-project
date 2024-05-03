import { getDateFormat } from "../../helpers/newsHelpers";

interface NewsProps {
  item: {
    _id: string;
    imgUrl: string;
    title: string;
    text: string;
    date: string;
    url: string;
    id: string;
  };
}

function NewsItem({ item }: NewsProps) {
  return (
    <li className="mobile:h-[379px] tablet:w-[340px] desktop:w-[360px] flex flex-col justify-between">
      <div>
        <img
          src={item.imgUrl}
          alt="new"
          className="rounded-15 w-full h-[190px] object-cover"
        />
        <h3 className="mt-[20px] font-bold text-16 leading-tight tracking-[-0.03em]">
          {item.title}
        </h3>
        <p className="mt-[12px] text-14 leading-[1.29] tracking-[-0.02em] text-ellipsis overflow-hidden ...">
          {item.text}
        </p>
      </div>

      <div className="mt-[19px] flex justify-between items-center">
        <p className="text-14 text-darkGrey leading-[1.29] tracking-[-0.02em]">
          {getDateFormat(item.date)}
        </p>
        <a
          href={item.url}
          target="_blank"
          rel="noreferrer noopener nofollow"
          className="text-14 underline leading-[1.29] tracking-[-0.02em] text-accent cursor-pointer"
        >
          Read more
        </a>
      </div>
    </li>
  );
}

export default NewsItem;
