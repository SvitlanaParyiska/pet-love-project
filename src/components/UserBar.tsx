import { Link, useLocation } from "react-router-dom";
import MediaQuery from "react-responsive";
import { selectUserAvatar, selectUserName } from "../redux/user/userSelectors";
import { useAppSelector } from "../hooks/useReduxHooks";
import sprite from "/images/sprite.svg";
import clsx from "clsx";

function UserBar() {
  const userName = useAppSelector(selectUserName);
  const userPhoto = useAppSelector(selectUserAvatar);
  const currentUrl = useLocation();

  return (
    <Link to="/profile" className="ml-[8px] flex items-center gap-[8px]">
      <div className="w-[50px] h-[50px] rounded-full bg-light transition-all duration-350 active:bg-buttonHover focus:bg-buttonHover hover:bg-buttonHover overflow-hidden flex justify-center items-center">
        {userPhoto ? (
          <img src={userPhoto} alt="user avatar" />
        ) : (
          <svg className="w-[24px] h-[24px]">
            <use href={`${sprite}#icon-user`}></use>
          </svg>
        )}
      </div>
      <MediaQuery minWidth={768}>
        <p
          className={clsx(
            "font-bold",
            currentUrl.pathname === "/" ? "text-white" : "text-current"
          )}
        >
          {userName}
        </p>
      </MediaQuery>
    </Link>
  );
}

export default UserBar;
