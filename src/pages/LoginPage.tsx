import imageMobile from "/images/mobile/dog-corgy-1x.png";
import imageMobileR from "/images/mobile/dog-corgy-2x.png";
import imageTablet from "/images/tablet/dog-corgy-1x.png";
import imageTabletR from "/images/tablet/dog-corgy-2x.png";
import imageDesktop from "/images/desktop/dog-corgy-1x.png";
import imageDesktopR from "/images/desktop/dog-corgy-2x.png";
import imageDog from "/images/dog.png";
import LoginForm from "../components/forms/LoginForm";
import { richReview } from "../data/review";
import MediaQuery from "react-responsive";

const LoginPage = () => {
  return (
    <main className="container pb-[20px] tablet:pb-[32px]">
      <div className="desktop:flex desktop:gap-[32px]">
        <section className="relative desktop:content-container desktop:w-2/4 bg-accent rounded-30 tablet:rounded-60 h-[280px] tablet:h-[302px] flex justify-center items-end">
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
              className="tablet:ml-[270px] desktop:ml-[40px]"
              src={imageMobile}
              alt="404 cat"
            />
          </picture>
          <MediaQuery minWidth={768}>
            <div className="absolute bottom-[30px] left-[37px] desktop:bottom-[97px] desktop:left-[64px] w-[310px] px-[18px] py-[16px] flex gap-[8px] bg-white rounded-20">
              <div className="bg-light rounded-full w-[60px] h-[60px] flex justify-center items-center">
                <img
                  src={imageDog}
                  alt="Rich's pet"
                  className="w-[32px] h-[32px]"
                ></img>
              </div>
              <div className="w-[210px]">
                <div className="flex gap-[4px] items-center justify-between mb-[8px]">
                  <h3 className="font-bold text-16 text-accent">
                    {richReview.name}
                  </h3>
                  <p className="text-darkGrey text-12 leading-[1.17] tracking-[-0.02em]">
                    Birthday:{" "}
                    <span className="text-midnight">{richReview.birthday}</span>
                  </p>
                </div>
                <p className="text-12 leading-[1.17] tracking-[-0.02em]">
                  {richReview.review}
                </p>
              </div>
            </div>
          </MediaQuery>
        </section>
        <section className="mt-[10px] tablet:mt-[16px] rounded-30 tablet:rounded-60 py-[60px] px-[20px] tablet:py-[71px] tablet:px-[140px] desktop:px-[84px] desktop:flex desktop:items-center desktop:my-[0px] bg-white">
          <div>
            <h1 className="mb-[12px] font-bold text-28 tablet:text-54 leading-[1] tracking-[-0.04em] desktop:w-[424px]">
              Log in
            </h1>
            <p className="mb-[24px] desktop:mb-[32px] text-14 tablet:text-18 leading-[1.29] tracking-[-0.02em] desktop:w-[424px]">
              Welcome! Please enter your credentials to login to the platform:
            </p>
            <LoginForm />
          </div>
        </section>
      </div>
    </main>
  );
};

export default LoginPage;
