import clsx from "clsx";
import { NavLink, useLocation } from "react-router-dom";

function Nav() {
  const currentUrl = useLocation();

  return (
    <div className="flex gap-2.5 mr-[142px]">
      <NavLink
        to="/news"
        className={clsx(
          "px-[19px] py-[14px] border-1 rounded-30 leading-tight tracking-[-0.03em]",
          currentUrl.pathname === "/"
            ? "border-lightAccent text-white active:bg-light active:text-accent focus:bg-light focus:text-accent hover:bg-light hover:text-accent"
            : "border-grey active:border-accent focus:border-accent hover:border-accent"
        )}
      >
        News
      </NavLink>
      <NavLink
        to="/notices"
        className={clsx(
          "px-[19px] py-[14px] border-1 rounded-30 leading-tight tracking-[-0.03em]",
          currentUrl.pathname === "/"
            ? "border-lightAccent text-white active:bg-light active:text-accent focus:bg-light focus:text-accent hover:bg-light hover:text-accent"
            : "border-grey active:border-accent focus:border-accent hover:border-accent"
        )}
      >
        Find pet
      </NavLink>
      <NavLink
        to="/friends"
        className={clsx(
          "px-[19px] py-[14px] border-1 rounded-30 leading-tight tracking-[-0.03em]",
          currentUrl.pathname === "/"
            ? "border-lightAccent text-white active:bg-light active:text-accent focus:bg-light focus:text-accent hover:bg-light hover:text-accent"
            : "border-grey active:border-accent focus:border-accent hover:border-accent"
        )}
      >
        Our friends
      </NavLink>
    </div>
  );
}

export default Nav;
