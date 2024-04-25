import imageMobile from "/images/mobile/not-found-1x.png";
import imageMobileR from "/images/mobile/not-found-2x.png";
import imageTablet from "/images/tablet/not-found-1x.png";
import imageTabletR from "/images/tablet/not-found-2x.png";
import imageDesktop from "/images/desktop/not-found-1x.png";
import imageDesktopR from "/images/desktop/not-found-2x.png";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <main>
      <div className="container pb-[20px] tablet:pb-[32px]">
        <div className="content-container bg-accent rounded-30 flex flex-col justify-center items-center">
          <div>
            <div className="flex justify-center items-center mb-[20px] tablet:mb-[40px]">
              <p className="font-extrabold text-120 tablet:text-300 text-white leading-none">
                4
              </p>
              <div className="w-[109px] h-[109px] tablet:w-[280px] tablet:h-[280px] rounded-full overflow-hidden bg-bgAccent">
                <picture>
                  <source
                    srcSet={`${imageDesktop} 1x,${imageDesktopR} 2x`}
                    media="(min-width: 1280px)"
                  />
                  <source
                    srcSet={`${imageTablet} 1x,${imageTabletR} 2x`}
                    media="(min-width: 768px)"
                  />
                  <source
                    srcSet={`${imageMobile} 1x,${imageMobileR} 2x`}
                    media="(max-width: 767px)"
                  />
                  <img src={imageMobile} alt="404 cat" />
                </picture>
              </div>
              <p className="font-extrabold text-120 tablet:text-300 text-white leading-none">
                4
              </p>
            </div>
            <p className="text-center font-bold text-16 tablet:text-24 text-white leading-tight tracking-[-0.03em] mb-[20px]">
              Ooops! This page not found :(
            </p>
            <Link
              to="/"
              className="block mx-auto w-[160px] tablet:w-[175px] bg-light py-[12px] px-[30px] rounded-30 font-bold text-accent text-14 tablet:text-16 active:bg-buttonHover focus:bg-buttonHover hover:bg-buttonHover"
            >
              To home page
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};

export default NotFoundPage;
