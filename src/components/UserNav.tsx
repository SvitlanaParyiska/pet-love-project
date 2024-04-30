import MediaQuery from "react-responsive";
import LogOutBtn from "./LogOutBtn";
import UserBar from "./UserBar";

function UserNav() {
  
  return (
    <>
      <MediaQuery minWidth={768}>
        <LogOutBtn size="tablet" color="accent"/>
      </MediaQuery>
      <UserBar />
    </>
  );
}

export default UserNav;
