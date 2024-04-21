import { useAppSelector } from "../../hooks/useReduxHooks";
import { selectFriends } from "../../redux/dataBase/dataBaseSelectors";
import FriendsItem from "./FriendsItem";

function FriendsList() {
  const FriendsArr = useAppSelector(selectFriends);
  return (
    <ul>
      {FriendsArr.map((item) => (
        <FriendsItem friend={item} />
      ))}
    </ul>
  );
}

export default FriendsList;
