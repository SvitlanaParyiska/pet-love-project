import { NavLink } from "react-router-dom";
import Nav from "./Nav";
import AuthNav from "./AuthNav";
import UserNav from "./UserNav";

function Header() {
  return (
    <header>
      <NavLink to="/">Logo</NavLink>
      <nav>
        <Nav />
        <AuthNav />
        <UserNav />
      </nav>
    </header>
  );
}

export default Header;
