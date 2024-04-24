import { useLocation } from "react-router-dom";
import sprite from "/images/sprite.svg";

function Logo() {
  const currentUrl = useLocation();

  return (
    <div>
      {currentUrl.pathname === "/" ? (
        <svg
          aria-label="logo Pet love"
          className="w-[76px] h-[20px] tablet:w-[105px] tablet:h-[28px]"
        >
          <use href={`${sprite}#icon-logo-1`}></use>
        </svg>
      ) : (
        <svg
          aria-label="logo Pet love"
          className="w-[76px] h-[20px] tablet:w-[105px] tablet:h-[28px]"
        >
          <use href={`${sprite}#icon-logo`}></use>
        </svg>
      )}
    </div>
  );
}

export default Logo;
