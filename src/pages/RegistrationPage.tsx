import imageMobile from "/images/mobile/cat-1x.png";
import imageMobileR from "/images/mobile/cat-2x.png";
import imageTablet from "/images/tablet/cat-1x.png";
import imageTabletR from "/images/tablet/cat-2x.png";
import imageDesktop from "/images/desktop/cat-1x.png";
import imageDesktopR from "/images/desktop/cat-2x.png";
import RegistrationForm from "../components/forms/RegistrationForm";
import { jackReview } from "../data/review";
import imageCat from "/images/cat.png";
import MediaQuery from "react-responsive";

const RegistrationPage = () => {
  return (
    <main className="container pb-[20px] tablet:pb-[32px]">
      <div className="desktop:flex desktop:gap-[32px]">
        <section className="relative desktop:content-container desktop:w-2/4 bg-accent rounded-30 tablet:rounded-60 h-[280px] tablet:h-[302px] flex justify-items-center items-end">
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
            <img
              src={imageMobile}
              alt="404 cat"
              className="tablet:ml-[270px] desktop:ml-[40px]"
            />
          </picture>
          <MediaQuery minWidth={768}>
            <div className="absolute bottom-[30px] left-[37px] desktop:bottom-[97px] desktop:left-[64px] w-[310px] px-[18px] py-[16px] flex gap-[8px] bg-white rounded-20">
              <div className="bg-light rounded-full w-[60px] h-[60px] flex justify-center items-center">
                <img
                  src={imageCat}
                  alt="Rich's pet"
                  className="w-[32px] h-[32px]"
                ></img>
              </div>
              <div className="w-[210px]">
                <div className="flex gap-[4px] items-center justify-between mb-[8px]">
                  <h3 className="font-bold text-16 text-accent">
                    {jackReview.name}
                  </h3>
                  <p className="text-darkGrey text-12 leading-[1.17] tracking-[-0.02em]">
                    Birthday:{" "}
                    <span className="text-midnight">{jackReview.birthday}</span>
                  </p>
                </div>
                <p className="text-12 leading-[1.17] tracking-[-0.02em]">
                  {jackReview.review}
                </p>
              </div>
            </div>
          </MediaQuery>
        </section>
        <section className="mt-[10px] tablet:mt-[16px] rounded-30 tablet:rounded-60 py-[27px] px-[20px] tablet:py-[30px] tablet:px-[140px] desktop:px-[84px] desktop:flex desktop:items-center desktop:my-[0px] bg-white">
          <div>
            <h1 className="mb-[12px] font-bold text-28 tablet:text-54 leading-[1] tracking-[-0.04em]">
              Registration
            </h1>
            <p className="mb-[24px] desktop:mb-[32px] text-14 tablet:text-18 leading-[1.29] tracking-[-0.02em">
              Thank you for your interest in our platform.
            </p>
            <RegistrationForm />
          </div>
        </section>
      </div>
    </main>
  );
};

export default RegistrationPage;
