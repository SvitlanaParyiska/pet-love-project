import { useState } from "react";
import { getBirthday } from "../../helpers/noticeHelper";
import sprite from "/images/sprite.svg";
import ModalNotice from "../modals/ModalNotice";
import PortalModal from "../modals/PortalModal";
import ModalAttention from "../modals/ModalAttention";
import { useAppDispatch, useAppSelector } from "../../hooks/useReduxHooks";
import {
  selectIsLoggedIn,
  selectUserFavoritesId,
} from "../../redux/user/userSelectors";
import {
  addUserNotice,
  deleteUserNotice,
} from "../../redux/user/userOperation";
import toast from "react-hot-toast";

export interface NoticeProps {
  item: {
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
  };
}

const NoticesItem = ({ item }: NoticeProps) => {
  const dispatch = useAppDispatch();
  const isAuth = useAppSelector(selectIsLoggedIn);
  const favList = useAppSelector(selectUserFavoritesId);

  const [modalNoticeItem, setModalNoticeItem] = useState<boolean>(false);
  const [modalError, setModalError] = useState<boolean>(false);

  const favIs = favList.find((favItem) => favItem === item._id);
  let fav = false;
  if (favIs) {
    fav = true;
  }

  const handleModalNoticeItem = () => {
    setModalNoticeItem((state: boolean) => !state);
  };
  const handleModalError = () => {
    setModalError((state: boolean) => !state);
  };

  const learnMore = () => {
    if (isAuth) {
      handleModalNoticeItem();
    } else handleModalError();
  };

  const handleFavorite = () => {
    if (!isAuth) {
      handleModalError();
      return;
    }
    if (fav) {
      dispatch(deleteUserNotice(item._id));
      toast.success("Notice successful deleted!");
    } else {
      dispatch(addUserNotice(item._id));
      toast.success("Notice successful added!");
    }
  };

  return (
    <>
      <li className="w-full tablet:w-[342px] desktop:w-[363px] h-[430px] p-[24px] flex flex-col justify-between bg-white rounded-16">
        <div>
          <img
            src={item.imgURL}
            alt="pet"
            className="rounded-15 w-full h-[178px] object-cover mb-[24px]"
          />
          <div className="mb-[8px] flex justify-between items-center">
            <h3 className="font-bold text-textAccent tablet:text-18 leading-[1.25]tablet:leading-[1.33] ">
              {item.title}
            </h3>
            <div className="flex items-center gap-[2px]">
              <svg aria-label="star" className="w-[16px] h-[16px]">
                <use href={`${sprite}#icon-star`} />
              </svg>
              <p className="text-14 text-textAccent leading-[1.29]">
                {item.popularity}
              </p>
            </div>
          </div>

          <div className="mb-[16px] flex gap-[14px]">
            <div>
              <p className="mb-[2px] text-10 text-darkGrey leading-[1.4] tracking-[-0.02em]">
                Name
              </p>
              <p className="text-12 capitalize leading-[1.17] tracking-[-0.02em]">
                {item.name}
              </p>
            </div>
            <div>
              <p className="mb-[2px] text-10 text-darkGrey leading-[1.4] tracking-[-0.02em]">
                Birthday
              </p>
              <p className="text-12 leading-[1.17] tracking-[-0.02em]">
                {getBirthday(item.birthday)}
              </p>
            </div>
            <div>
              <p className="mb-[2px] text-10 text-darkGrey capitalize leading-[1.4] tracking-[-0.02em]">
                Sex
              </p>
              <p className="text-12 capitalize leading-[1.17] tracking-[-0.02em]">
                {item.sex}
              </p>
            </div>
            <div>
              <p className="mb-[2px] text-10 text-darkGrey leading-[1.4] tracking-[-0.02em]">
                Species
              </p>
              <p className="text-12 capitalize leading-[1.17] tracking-[-0.02em]">
                {item.species}
              </p>
            </div>
            <div>
              <p className="mb-[2px] text-10 text-darkGrey leading-[1.4] tracking-[-0.02em]">
                Category
              </p>
              <p className="text-12 capitalize leading-[1.17] tracking-[-0.02em]">
                {item.category}
              </p>
            </div>
          </div>
          <p className="text-14 leading-[1.29] tracking-[-0.02em]">
            {item.comment}
          </p>
        </div>
        <div className="flex gap-[10px]">
          <button
            type="button"
            onClick={learnMore}
            className="px-[78px] tablet:px-[76px] py-[14px] rounded-30 bg-accent transition-all duration-350 active:bg-buttonAccent focus:bg-buttonAccent hover:bg-buttonAccent text-14 tablet:text-16 leading-[1.29] tracking-[-0.03em] text-white"
          >
            Learn more
          </button>
          <button
            type="button"
            onClick={handleFavorite}
            className="rounded-full p-[14px] bg-light transition-all duration-350 active:bg-buttonHover focus:bg-buttonHover hover:bg-buttonHover"
          >
            {fav ? (
              <svg
                aria-label="star"
                className="w-[18px] h-[18px] fill-accent stroke-accent"
              >
                <use href={`${sprite}#icon-heart-active`} />
              </svg>
            ) : (
              <svg aria-label="star" className="w-[18px] h-[18px]">
                <use href={`${sprite}#icon-heart`} />
              </svg>
            )}
          </button>
        </div>
      </li>
      {modalNoticeItem && (
        <PortalModal handleModal={handleModalNoticeItem}>
          <ModalNotice item={item} />
        </PortalModal>
      )}
      {modalError && (
        <PortalModal handleModal={handleModalError}>
          <ModalAttention />
        </PortalModal>
      )}
    </>
  );
};

export default NoticesItem;
