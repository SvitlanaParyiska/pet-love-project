import MediaQuery from "react-responsive";
import LogOutBtn from "./LogOutBtn";
import UserBar from "./UserBar";
import { useLocation } from "react-router-dom";

function UserNav() {
  const currentUrl = useLocation();

  return (
    <div className="flex items-center gap-[8px]">
      <MediaQuery minWidth={768}>
        {currentUrl.pathname === "/" ? (
          <></>
        ) : (
          <LogOutBtn size="tablet" color="accent" />
        )}
      </MediaQuery>
      <MediaQuery minWidth={1280}>
        {currentUrl.pathname === "/" ? (
          <LogOutBtn size="tablet" color="accent" />
        ) : (
          <></>
        )}
      </MediaQuery>
      <UserBar />
    </div>
  );
}

export default UserNav;
