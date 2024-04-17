import { Link } from "react-router-dom";
import Nav from "./Nav";
import AuthNav from "./AuthNav";
import UserNav from "./UserNav";
import Logo from "./Logo";

function Header() {
  return (
    <header className="header-container flex">
      <Link to="/">
        <Logo />
      </Link>
      <nav>
        <Nav />
        <AuthNav />
        <UserNav />
      </nav>
    </header>
  );
}

export default Header;
