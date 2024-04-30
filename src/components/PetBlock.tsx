import imageMobile from "/images/mobile/dog-1x.png";
import imageMobileR from "/images/mobile/dog-2x.png";
import imageTablet from "/images/tablet/dog-1x.png";
import imageTabletR from "/images/tablet/dog-2x.png";
import imageDesktop from "/images/desktop/dog-1x.png";
import imageDesktopR from "/images/desktop/dog-2x.png";

function PetBlock() {
  return (
    <section className="desktop:content-container desktop:w-2/4 bg-accent rounded-30 tablet:rounded-60 h-[213px] tablet:h-[248px] flex justify-center items-end">
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
        <img className="" src={imageMobile} alt="404 dog" />
      </picture>
    </section>
  );
}

export default PetBlock;
