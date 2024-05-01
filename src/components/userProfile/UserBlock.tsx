import { useAppSelector } from "../../hooks/useReduxHooks";
import {
  selectFullUser,
  selectUserAvatar,
} from "../../redux/user/userSelectors";
import sprite from "/images/sprite.svg";

const UserBlock = () => {
  const userPhoto = useAppSelector(selectUserAvatar);
  const userInfo = useAppSelector(selectFullUser);

  return (
    <>
      <div className="mx-auto w-[94px] h-[94px] rounded-full bg-light overflow-hidden flex justify-center items-center">
        {userPhoto ? (
          <img src={userInfo.avatar} />
        ) : (
          <svg className="w-[40px] h-[40px]">
            <use href={`${sprite}#icon-user`}></use>
          </svg>
        )}
      </div>
      {!userPhoto && (
        <button
          type="button"
          className="block mx-auto mt-[8px] text-12 leading-[1.33] tracking-[-0.02em] underline"
        >
          Upload photo
        </button>
      )}
      <h3 className="font-bold mt-[28px] text-16 leading-[1.25]">
        My information
      </h3>
      <ul className="mt-[20px] flex flex-col tablet:flex-wrap tablet:flex-row gap-[10px] desktop:flex-col desktop:gap-[14px]">
        <li className="tablet:w-[305px] desktop:w-full p-[12px] border-1 border-grey rounded-30 text-14 leading-[1.29] tracking-[-0.03em]">
          {userInfo.name ? userInfo.name : "Name"}
        </li>
        <li className="tablet:w-[305px] desktop:w-full p-[12px] border-1 border-grey rounded-30 text-14 leading-[1.29] tracking-[-0.03em]">
          {userInfo.email}
        </li>
        <li className="tablet:w-[305px] desktop:w-full p-[12px] border-1 border-grey rounded-30 text-14 leading-[1.29] tracking-[-0.03em]">
          {userInfo.phone ? userInfo.phone : "+380"}
        </li>
      </ul>
    </>
  );
};

export default UserBlock;
