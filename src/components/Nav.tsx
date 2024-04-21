import { NavLink } from "react-router-dom";

function Nav() {
  return (
    <div className="flex gap-2.5 mr-[142px]">
      <NavLink
        to="/news"
        className="px-[20px] py-[15px] border-1 rounded-30 border-grey active:border-accent focus:border-accent hover:border-accent"
      >
        News
      </NavLink>
      <NavLink
        to="/notices"
        className="px-[20px] py-[15px] border-1 rounded-30 border-grey active:border-accent focus:border-accent hover:border-accent"
      >
        Find pet
      </NavLink>
      <NavLink
        to="/friends"
        className="px-[20px] py-[15px] border-1 rounded-30 border-grey active:border-accent focus:border-accent hover:border-accent"
      >
        Our friends
      </NavLink>
    </div>
  );
}

export default Nav;
