import imageMobile from "/images/mobile/home-1x.jpg";
import imageMobileR from "/images/mobile/home-2x.jpg";
import imageTablet from "/images/tablet/home-1x.jpg";
import imageTabletR from "/images/tablet/home-2x.jpg";
import imageDesktop from "/images/desktop/home-1x.jpg";
import imageDesktopR from "/images/desktop/home-2x.jpg";

const HomePage = () => {
  return (
    <main>
      <div className="container py-[10px]  tablet:py-[16px]">
        <div className="home-section bg-accent rounded-30 tablet:rounded-60 px-[20px] pt-[118px] tablet:px-[32px] tablet:pt-[178px] desktop:px-[64px] desktop:pb-[64px] desktop:flex desktop:gap-[73px] desktop:items-end">
          <h1 className="font-bold text-50 tablet:text-76 desktop:text-90 text-white leading-[0.96] tracking-[-0.03em] desktop:w-[760px]">
            Take good <span className="text-lightAccent">care</span> of your
            small pets
          </h1>
          <p className="mt-[24px] tablet:mt-[32px] text-14 tablet:text-18 text-white leading-[1.29] tablet:leading-[1.22] tablet:w-[270px] tablet:ml-auto tracking-[-0.05em] text-justify">
            Choosing a pet for your home is a choice that is meant to enrich
            your life with immeasurable joy and tenderness.
          </p>
        </div>
        <div className="home-section rounded-30 tablet:rounded-60 overflow-hidden">
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
              className="w-full h-full object-cover"
              src={imageMobile}
              alt="404 cat"
            />
          </picture>
        </div>
      </div>
    </main>
  );
};

export default HomePage;
