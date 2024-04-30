import { useEffect } from "react";
import MyNotices from "../components/userProfile/MyNotices";
import UserCard from "../components/userProfile/UserCard";
import { useAppDispatch } from "../hooks/useReduxHooks";
import { getFullCurrentUser } from "../redux/user/userOperation";

const ProfilePage = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getFullCurrentUser());
  }, [dispatch]);
  return (
    <main>
      <div className="container pb-[20px] tablet:pb-[32px] desktop:flex desktop:gap-[32px]">
        <section className="p-[20px] tablet:p-[40px] desktop:w-[520px]">
          <UserCard />
        </section>
        <section className="pt-[40px] pb-[60px]">
          <MyNotices />
        </section>
      </div>
    </main>
  );
};

export default ProfilePage;
