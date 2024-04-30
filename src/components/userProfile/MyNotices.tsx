import clsx from "clsx";
import { useState } from "react";
import { selectFullUser } from "../../redux/user/userSelectors";
import { useAppSelector } from "../../hooks/useReduxHooks";
import NoticesList from "../notices/NoticesList";

function MyNotices() {
  const [activeButton, setActiveButton] = useState<string>("fav");
  const userFull = useAppSelector(selectFullUser);

  const handleActive = (item: string) => {
    setActiveButton(item);
  };
  return (
    <>
      <div className="flex gap-[10px]">
        <button
          type="button"
          className={clsx(
            "p-[12px] tablet:p-[14px] rounded-30 text-14 tablet:text-16 leading-[1.29] tablet:leading-[1.25] tracking-[-0.03em]",
            activeButton === "fav" ? "bg-accent text-white" : "bg-transparent"
          )}
          onClick={() => handleActive("fav")}
        >
          My favorite pets
        </button>
        <button
          type="button"
          className={clsx(
            "p-[12px] tablet:p-[14px] rounded-30 text-14 tablet:text-16 leading-[1.29] tablet:leading-[1.25] tracking-[-0.03em]",
            activeButton === "viewed"
              ? "bg-accent text-white"
              : "bg-transparent"
          )}
          onClick={() => handleActive("viewed")}
        >
          My favorite pets
        </button>
      </div>
      {activeButton === "fav" &&
      userFull &&
      userFull?.noticesFavorites.length > 0 ? (
        <NoticesList noticesArr={userFull.noticesFavorites} />
      ) : (
        <p className="mt-[20px]">
          Oops, looks like there aren't any furries on our adorable page yet. Do
          not worry! View your pets on the "find your favorite pet" page and add
          them to your favorites.
        </p>
      )}
      {activeButton === "viewed" &&
      userFull &&
      userFull?.noticesViewed.length > 0 ? (
        <NoticesList noticesArr={userFull.noticesViewed} />
      ) : (
        <p className="mt-[20px]">You didn't view anything</p>
      )}
    </>
  );
}

export default MyNotices;
