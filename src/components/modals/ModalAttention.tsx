interface ModalEditUser {
  closeModalAttention: () => void;
}

const ModalAttention = ({ closeModalAttention }: ModalEditUser) => {
  return <div onClick={closeModalAttention}>ModalAttention</div>;
};

export default ModalAttention;
