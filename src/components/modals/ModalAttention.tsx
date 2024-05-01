import { Link } from "react-router-dom";
import imageCat from "/images/cat.png";

const ModalAttention = () => {
  return (
    <div className="w-[330px] mx-auto">
      <div className="mb-[24px] bg-light rounded-full mx-auto  w-[50px] h-[50px] flex items-center justify-center">
        <img src={imageCat} alt="pet" className=" object-cover " />
      </div>
      <div className="flex gap-[10px] justify-center">
        <Link
          to="/login"
          className="px-[35px] py-[13px] border-1 border-buttonHover rounded-30 bg-accent text-16 font-bold text-white tracking-[-0.03em] leading-[1.28] active:bg-light active:text-accent focus:bg-light focus:text-accent hover:bg-light hover:text-accent"
        >
          LOG IN
        </Link>
        <Link
          to="/registration"
          className="px-[35px] py-[15px] rounded-30 bg-light text-16 font-bold text-accent tracking-[-0.03em] leading-[1.28] active:bg-buttonHover focus:bg-buttonHover hover:bg-buttonHover"
        >
          REGISTRATION
        </Link>
      </div>
    </div>
  );
};

export default ModalAttention;
