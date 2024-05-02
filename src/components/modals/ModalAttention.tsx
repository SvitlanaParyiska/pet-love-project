import { Link } from "react-router-dom";
import imageCat from "/images/cat.png";

const ModalAttention = () => {
  return (
    <div className="w-[346px] mx-auto">
      <div className="mb-[24px] bg-light rounded-full mx-auto  w-[50px] h-[50px] flex items-center justify-center">
        <img src={imageCat} alt="pet" className=" object-cover " />
      </div>
      <h3 className="mb-[20px] text-24 text-center text-accent font-bold tracking-[-0.03em] leading-[1.17]">
        Attention
      </h3>
      <p className="mb-[28px] text-14 text-center tracking-[-0.02em] leading-[1.29]">
        We would like to remind you that certain functionality is available only
        to authorized users.If you have an account, please log in with your
        credentials. If you do not already have an account, you must register to
        access these features.
      </p>
      <div className="flex gap-[10px] justify-center">
        <Link
          to="/login"
          className="text-center py-[13px] w-[140px] border-1 border-buttonHover rounded-30 bg-accent text-16 font-bold text-white tracking-[-0.03em] leading-[1.25] active:bg-light active:text-accent focus:bg-light focus:text-accent hover:bg-light hover:text-accent"
        >
          Log in
        </Link>
        <Link
          to="/registration"
          className="text-center py-[15px] w-[140px] rounded-30 bg-light text-16 font-bold text-accent tracking-[-0.03em] leading-[1.25] active:bg-buttonHover focus:bg-buttonHover hover:bg-buttonHover"
        >
          Registration
        </Link>
      </div>
    </div>
  );
};

export default ModalAttention;
