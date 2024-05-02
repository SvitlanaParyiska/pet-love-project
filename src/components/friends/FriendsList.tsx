import { nanoid } from "nanoid";
import { useAppSelector } from "../../hooks/useReduxHooks";
import { selectFriends } from "../../redux/dataBase/dataBaseSelectors";
import FriendsItem from "./FriendsItem";

function FriendsList() {
  const FriendsArr = useAppSelector(selectFriends);
  return (
    <ul className="flex flex-col gap-[20px] items-center mt-[40px]  tablet:mt-[60px] tablet:flex-row tablet:flex-wrap desktop:gap-y-[28px] desktop:gap-x-[20px]">
      {FriendsArr.map((item) => (
        <FriendsItem friend={item} key={nanoid()} />
      ))}
    </ul>
  );
}

export default FriendsList;
