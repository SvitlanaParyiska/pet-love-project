import clsx from "clsx";
import { KeyboardEvent, MouseEvent, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useAppSelector } from "../hooks/useReduxHooks";
import { selectIsLoggedIn } from "../redux/user/userSelectors";
import LogOutBtn from "./LogOutBtn";
import sprite from "/images/sprite.svg";

interface MobileMenuProps {
  isMenuOpen: boolean;
  toggleMenu: () => void;
}

const BurgerMenu = ({ isMenuOpen, toggleMenu }: MobileMenuProps) => {
  const isAuth = useAppSelector(selectIsLoggedIn);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
      if (event.code === "Escape") {
        toggleMenu();
      }
    };
    window.addEventListener("keydown", () => handleKeyDown);
    return () => {
      window.removeEventListener("keydown", () => handleKeyDown);
    };
  }, [toggleMenu]);

  const handleCloseClick = () => {
    toggleMenu();
  };

  const handleBackdropClick = (event: MouseEvent) => {
    if (event.currentTarget === event.target) {
      toggleMenu();
    }
  };

  return (
    <div
      onClick={handleBackdropClick}
      className={clsx(
        "fixed top-0 right-0 h-screen w-screen bg-overlay z-40 md:hidden transition-all duration-350",
        isMenuOpen ? "opacity-100" : "opacity-0 invisible"
      )}
    >
      <div
        className={clsx(
          "fixed top-0 right-0 h-screen w-3/5 pt-[28px] pb-[40px] px-[20px] bg-accent z-50 flex flex-col justify-between items-center transition-all duration-350",
          isMenuOpen ? "translate-x-0 " : "translate-x-full "
        )}
      >
        <div className="w-full">
          <button
            type="button"
            aria-label="Close menu"
            onClick={handleCloseClick}
            className="block ml-auto"
          >
            <svg className="w-[32px] h-[32px]">
              <use href={`${sprite}#icon-x-white`}></use>
            </svg>
          </button>
          <nav className="flex flex-col mt-[176px] justify-between">
            <div className="flex flex-col gap-[10px] items-center">
              <NavLink
                to="/news"
                className="px-[20px] py-[15px] w-[123px] h-[49px] border-1 rounded-30 border-medgrey active:border-lightgrey focus:border-lightgrey hover:border-lightgrey text-14 tablet:text-16 text-white tracking-[-0.03em] flex justify-center items-center leading-[1.29] tablet:leading-tight"
              >
                News
              </NavLink>
              <NavLink
                to="/notices"
                className="px-[20px] py-[15px] w-[123px] h-[49px] border-1 rounded-30 border-medgrey active:border-lightgrey focus:border-lightgrey hover:border-lightgrey text-14 tablet:text-16 text-white tracking-[-0.03em] flex justify-center items-center leading-[1.29] tablet:leading-tight"
              >
                Find pet
              </NavLink>
              <NavLink
                to="/friends"
                className="px-[20px] py-[15px] w-[128px] h-[49px] border-1 rounded-30 border-medgrey active:border-lightgrey focus:border-lightgrey hover:border-lightgrey text-14 tablet:text-16 text-white tracking-[-0.03em] flex justify-center items-center leading-[1.29] tablet:leading-tight"
              >
                Our friends
              </NavLink>
            </div>
          </nav>
        </div>
        {isAuth ? (
          <LogOutBtn size="mobile" color="white" />
        ) : (
          <div className="flex flex-col gap-[8px] tablet:flex-row w-full justify-center">
            <NavLink
              to="/login"
              className="px-[20px] py-[12px] flex justify-center items-center w-full tablet:w-[121px]  border-1 rounded-30 border-lightgrey bg-accent text-14 tablet:text-16 font-bold text-white tracking-[-0.03em] leading-[1.28] "
            >
              LOG IN
            </NavLink>
            <NavLink
              to="/registration"
              className="px-[20px] py-[12px] flex justify-center items-center w-full tablet:w-[149px] rounded-30 bg-light text-14 tablet:text-16 font-bold text-accent tracking-[-0.03em] leading-[1.28]"
            >
              REGISTRATION
            </NavLink>
          </div>
        )}
      </div>
    </div>
  );
};

export default BurgerMenu;
