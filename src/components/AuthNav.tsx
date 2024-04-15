import { NavLink } from "react-router-dom";

function AuthNav() {
  return (
    <>
      <NavLink to="/registration">Registration</NavLink>
      <NavLink to="/login">Login</NavLink>
    </>
  );
}

export default AuthNav;
