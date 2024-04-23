import { NavLink } from "react-router-dom";

function Nav() {
  return (
    <div className="flex gap-2.5 mr-[142px]">
      <NavLink
        to="/news"
        className="px-[19px] py-[14px] border-1 rounded-30 border-grey active:border-accent focus:border-accent hover:border-accent leading-tight tracking-[-0.03em]"
      >
        News
      </NavLink>
      <NavLink
        to="/notices"
        className="px-[19px] py-[14px] border-1 rounded-30 border-grey active:border-accent focus:border-accent hover:border-accent leading-tight tracking-[-0.03em]"
      >
        Find pet
      </NavLink>
      <NavLink
        to="/friends"
        className="px-[19px] py-[14px] border-1 rounded-30 border-grey active:border-accent focus:border-accent hover:border-accent leading-tight tracking-[-0.03em]"
      >
        Our friends
      </NavLink>
    </div>
  );
}

export default Nav;
