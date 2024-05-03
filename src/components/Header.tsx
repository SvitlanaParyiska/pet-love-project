import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import MediaQuery from "react-responsive";
import Nav from "./Nav";
import AuthNav from "./AuthNav";
import UserNav from "./UserNav";
import Logo from "./Logo";
import BurgerMenu from "./BurgerMenu";
import sprite from "/images/sprite.svg";
import { useAppSelector } from "../hooks/useReduxHooks";
import { selectIsLoggedIn } from "../redux/user/userSelectors";
import clsx from "clsx";

function Header() {
  const currentUrl = useLocation();
  const isAuth = useAppSelector(selectIsLoggedIn);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <header
      className={clsx(
        currentUrl.pathname === "/" ? "fixed top-0 z-40 w-full" : ""
      )}
    >
      <div
        className={clsx(
          "flex items-center",
          currentUrl.pathname === "/"
            ? "header-container-home justify-between desktop:gap-[280px]"
            : "header-container justify-between desktop:gap-[313px]"
        )}
      >
        <Link to="/" className="">
          <Logo />
        </Link>
        <nav className="flex items-center desktop:justify-between desktop:w-full">
          <MediaQuery minWidth={1280}>
            <Nav />
          </MediaQuery>
          <MediaQuery minWidth={768}>{!isAuth && <AuthNav />}</MediaQuery>
          {isAuth && <UserNav />}
          <MediaQuery maxWidth={1279}>
            <button>
              {currentUrl.pathname === "/" ? (
                <svg
                  aria-label="Menu"
                  onClick={toggleMenu}
                  className="w-[32px] h-[32px] tablet:w-[36px] tablet:h-[36px] stroke-white ml-[16px]"
                >
                  <use href={`${sprite}#icon-burger-menu`} />
                </svg>
              ) : (
                <svg
                  aria-label="Menu"
                  onClick={toggleMenu}
                  className="w-[32px] h-[32px] tablet:w-[36px] tablet:h-[36px] stroke-midnight ml-[16px]"
                >
                  <use href={`${sprite}#icon-burger-menu`} />
                </svg>
              )}
            </button>
          </MediaQuery>
          <MediaQuery maxWidth={1439}>
            {isMenuOpen && (
              <BurgerMenu isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
            )}
          </MediaQuery>
        </nav>
      </div>
    </header>
  );
}

export default Header;
