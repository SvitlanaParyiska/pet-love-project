import { useAppDispatch } from "../hooks/useReduxHooks";
import { logOut } from "../redux/user/userOperation";
import { resetStore } from "../redux/user/userSlice";

interface Color {
  white: string;
  accent: string;
}

interface Size {
  mobile: string;
  tablet: string;
}

interface LogOutBtnProps {
  size: string;
  color: string;
}

function LogOutBtn({ size, color }: LogOutBtnProps) {
  const colorVariants = {
    white: "bg-light hover:bg-buttonHover text-accent",
    accent: "bg-accent hover:bg-buttonAccent text-white",
  };

  const sizeVariants = {
    mobile:
      "py-[12px] px-[60px] w-full tablet:w-[210px] leading-[1.29] tracking-[-0.03em] tablet:font-manrope-bold",
    tablet: "py-[15px] px-[35px] w-[142px] leading-tight tracking-[-0.03em]",
  };

  const dispatch = useAppDispatch();

  const handleLogOut = () => {
    dispatch(logOut());
    dispatch(resetStore());
  };
  return (
    <button
      type="button"
      onClick={handleLogOut}
      className={`${colorVariants[color as keyof Color]}  ${
        sizeVariants[size as keyof Size]
      } border-1 rounded-30 text-14 tablet:text-16 flex justify-center items-center`}
    >
      LOG OUT
    </button>
  );
}

export default LogOutBtn;
