import { NavLink } from "react-router-dom";

function AuthNav() {
  return (
    <div className="flex gap-2">
      <NavLink
        to="/login"
        className="px-[35px] py-[15px] rounded-30 bg-accent text-16 font-manrope-bold text-white tracking-[-0.03em] leading-[1.28]"
      >
        LOG IN
      </NavLink>
      <NavLink
        to="/registration"
        className="px-[35px] py-[15px] rounded-30 bg-light text-16 font-manrope-bold text-accent tracking-[-0.03em] leading-[1.28]"
      >
        REGISTRATION
      </NavLink>
    </div>
  );
}

export default AuthNav;
