import { NavLink } from "react-router-dom";

function Nav() {
  return (
    <>
      <NavLink to="/news">News</NavLink>
      <NavLink to="/notices">Find pet</NavLink>
      <NavLink to="/friends">Our friends</NavLink>
    </>
  );
}

export default Nav;
