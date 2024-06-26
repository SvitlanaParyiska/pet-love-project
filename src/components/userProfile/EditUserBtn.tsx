import { useState } from "react";
import sprite from "/images/sprite.svg";
import PortalModal from "../modals/PortalModal";
import ModalEditUser from "../modals/ModalEditUser";

const EditUserBtn = () => {
  const [modalEdit, setModalEdit] = useState<boolean>(false);

  const handleModalEdit = () => {
    setModalEdit((state: boolean) => !state);
  };

  return (
    <>
      <div className="flex justify-between">
        <div className="w-[80px] p-[10px] rounded-30 flex gap-[4px] bg-accent items-center justify-center">
          <p className="text-white text-14 leading-[1.29] tracking-[-0.02em]">
            User
          </p>
          <svg aria-label="icon male" className="w-[18px] h-[18px] ">
            <use href={`${sprite}#icon-user-white`} />
          </svg>
        </div>
        <button
          type="button"
          onClick={handleModalEdit}
          className="bg-light rounded-full p-[10px] flex items-center justify-center"
        >
          <svg aria-label="icon male" className="w-[18px] h-[18px] ">
            <use href={`${sprite}#icon-edit`} />
          </svg>
        </button>
      </div>
      {modalEdit && (
        <PortalModal handleModal={handleModalEdit}>
          <ModalEditUser closeEditUserModal={handleModalEdit} />
        </PortalModal>
      )}
    </>
  );
};

export default EditUserBtn;
