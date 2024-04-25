import { NavLink } from "react-router-dom";

function AuthNav() {
  return (
    <div className="flex gap-2">
      <NavLink
        to="/login"
        className="px-[35px] py-[13px] border-1 border-buttonHover rounded-30 bg-accent text-16 font-bold text-white tracking-[-0.03em] leading-[1.28] active:bg-light active:text-accent focus:bg-light focus:text-accent hover:bg-light hover:text-accent"
      >
        LOG IN
      </NavLink>
      <NavLink
        to="/registration"
        className="px-[35px] py-[15px] rounded-30 bg-light text-16 font-bold text-accent tracking-[-0.03em] leading-[1.28] active:bg-buttonHover focus:bg-buttonHover hover:bg-buttonHover"
      >
        REGISTRATION
      </NavLink>
    </div>
  );
}

export default AuthNav;
