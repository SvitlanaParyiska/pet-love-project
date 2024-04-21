import { Link } from "react-router-dom";
import MediaQuery from "react-responsive";
import { selectUserAvatar, selectUserName } from "../redux/user/userSelectors";
import { useAppSelector } from "../hooks/useReduxHooks";
import sprite from "/images/sprite.svg";

function UserBar() {
  const userName = useAppSelector(selectUserName);
  const userPhoto = useAppSelector(selectUserAvatar);

  return (
    <Link to="/profile" className="ml-[8px]">
      <div className="w-[50px] h-[50px] rounded-full bg-light overflow-hidden flex justify-center items-center">
        {userPhoto ? (
          <img />
        ) : (
          <svg className="w-[24px] h-[24px]">
            <use href={`${sprite}#icon-user`}></use>
          </svg>
        )}
      </div>
      <MediaQuery minWidth={1279}>
        <p>{userName}</p>
      </MediaQuery>
    </Link>
  );
}

export default UserBar;
