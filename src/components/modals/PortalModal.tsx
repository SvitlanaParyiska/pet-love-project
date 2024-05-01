import { MouseEvent, ReactNode, useEffect } from "react";
import { createPortal } from "react-dom";

import clsx from "clsx";
import Icon from "../ui/Icon";

interface PortalModalProps {
  children: ReactNode;
  className?: string;
  handleModal: () => void;
}

interface KeyboardEvent {
  code: string;
}

const modalRoot = document.getElementById("modal-root") as HTMLElement;

const PortalModal = ({
  handleModal,
  children,
  className,
}: PortalModalProps) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.code === "Escape") {
        handleModal();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "auto";
    };
  }, [handleModal]);

  const onBackdropClick = (e: MouseEvent<HTMLElement>) => {
    if (e.currentTarget === e.target) {
      handleModal();
    }
  };

  return createPortal(
    <div
      className="fixed top-0 left-0 w-screen h-screen bg-overlay flex items-center justify-center z-40 bg-backdrop"
      onClick={onBackdropClick}
    >
      <div
        className={clsx(
          "absolute z-50 p-[50px] rounded-30 flex flex-col items-center bg-white",
          className
        )}
      >
        <button
          type="button"
          className="absolute top-[16px] right-[16px]"
          onClick={handleModal}
        >
          <Icon className="stroke-midnight" w={24} iconName="icon-close" />
        </button>
        {children}
      </div>
    </div>,
    modalRoot
  );
};

export default PortalModal;
