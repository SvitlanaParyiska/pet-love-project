import { useAppDispatch } from "../../hooks/useReduxHooks";
import { logOut } from "../../redux/user/userOperation";
import { resetStore } from "../../redux/user/userSlice";
import imageCat from "/images/cat.png";

interface ModalApproveActionProps {
  handleModal: () => void;
}

const ModalApproveAction = ({ handleModal }: ModalApproveActionProps) => {
  const dispatch = useAppDispatch();

  const handleLogOut = () => {
    dispatch(logOut());
    dispatch(resetStore());
    handleModal();
  };

  return (
    <div className="w-[288px]">
      <div className="mb-[24px] bg-light rounded-full mx-auto  w-[50px] h-[50px] flex items-center justify-center">
        <img src={imageCat} alt="pet" className=" object-cover " />
      </div>
      <h3 className="mb-[20px] text-24 text-center font-bold tracking-[-0.03em] leading-[1.17]">
        Already leaving?
      </h3>
      <div className="flex gap-[10px] justify-center">
        <button
          type="button"
          onClick={handleLogOut}
          className="w-[160px] py-[14px] rounded-30 bg-accent text-16 tablet:text-16 leading-[1.25] tracking-[-0.03em] text-white transition-all duration-350 active:bg-buttonAccent focus:bg-buttonAccent hover:bg-buttonAccent"
        >
          Yes
        </button>
        <button
          type="button"
          onClick={handleModal}
          className="w-[160px] rounded-30 p-[14px] bg-greyButton  text-16 tablet:text-16 leading-[1.25] tracking-[-0.03em] transition-all duration-350 active:bg-borderTop focus:bg-borderTop hover:bg-borderTop"
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default ModalApproveAction;
