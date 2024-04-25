import imageMobile from "/images/mobile/cat-1x.png";
import imageMobileR from "/images/mobile/cat-2x.png";
import imageTablet from "/images/tablet/cat-1x.png";
import imageTabletR from "/images/tablet/cat-2x.png";
import imageDesktop from "/images/desktop/cat-1x.png";
import imageDesktopR from "/images/desktop/cat-2x.png";
import RegistrationForm from "../components/forms/RegistrationForm";

const RegistrationPage = () => {
  return (
    <main className="container pb-[20px] tablet:pb-[32px]">
      <section className="bg-accent rounded-30 tablet:rounded-60 h-[280px] tablet:h-[302px] flex justify-items-center items-end ">
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
      </section>
      <section className="mx-auto px-[20px] pt-[37px] pb-[27px] max-w-[295px] tablet:max-w-[424px]">
        <h1 className="mb-[12px] font-bold text-28 tablet:text-54 leading-[1] tracking-[-0.04em]">
          Registration
        </h1>
        <p className="text-14 tablet:text-18 leading-[1.29] tracking-[-0.02em">
          Thank you for your interest in our platform.
        </p>
        <RegistrationForm />
      </section>
    </main>
  );
};

export default RegistrationPage;
