import { useEffect } from "react";
import Title from "../components/Title";
import FriendsList from "../components/friends/FriendsList";
import { useAppDispatch } from "../hooks/useReduxHooks";
import { getAllFriends } from "../redux/dataBase/dataBaseOperation";

const OurFriendsPage = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getAllFriends());
  }, [dispatch]);

  return (
    <main>
      <div className="container pb-[32px] tablet:pt-[53px] tablet:pb-[80px] desktop:pt-[64px] desktop:px-[64px]">
        <Title text="Our friends" />
        <FriendsList />
      </div>
    </main>
  );
};

export default OurFriendsPage;
