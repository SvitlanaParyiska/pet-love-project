import EditUserBtn from "./EditUserBtn";
import UserBlock from "./UserBlock";
import LogOutBtn from "../LogOutBtn";
import PetsBlock from "./PetsBlock";

const UserCard = () => {
  return (
    <>
      <EditUserBtn />
      <UserBlock />
      <PetsBlock />
      <LogOutBtn size={"tablet"} color={"white"} />
    </>
  );
};

export default UserCard;
