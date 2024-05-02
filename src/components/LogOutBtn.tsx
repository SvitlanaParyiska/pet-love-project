import { useState } from "react";
import PortalModal from "./modals/PortalModal";
import ModalApproveAction from "./modals/ModalApproveAction";

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
  const [modalApprove, setModalApprove] = useState<boolean>(false);

  const colorVariants = {
    white: "bg-light hover:bg-buttonHover text-accent",
    accent: "bg-accent hover:bg-buttonAccent text-white",
  };

  const sizeVariants = {
    mobile:
      "py-[12px] px-[60px] w-full tablet:w-[210px] leading-[1.29] tracking-[-0.03em] tablet:font-bold",
    tablet: "py-[15px] px-[35px] w-[142px] leading-tight tracking-[-0.03em]",
  };

  const handleModalApprove = () => {
    setModalApprove((state: boolean) => !state);
  };

  return (
    <>
      <button
        type="button"
        onClick={handleModalApprove}
        className={`${colorVariants[color as keyof Color]}  ${
          sizeVariants[size as keyof Size]
        } border-1 rounded-30 text-14 tablet:text-16 flex justify-center items-center`}
      >
        LOG OUT
      </button>
      {modalApprove && (
        <PortalModal handleModal={handleModalApprove}>
          <ModalApproveAction handleModal={handleModalApprove} />
        </PortalModal>
      )}
    </>
  );
}

export default LogOutBtn;
