import { Link } from "react-router-dom";
import sprite from "/images/sprite.svg";

const AddPet = () => {
  return (
    <Link
      to="/add-pet"
      className="bg-accent rounded-30 px-[16px] py-[10px] flex gap-[4px] justify-center items-center transition-all duration-350 active:bg-buttonAccent focus:bg-buttonAccent hover:bg-buttonAccent"
    >
      <p className="text-white text-14 leading-[1.29] tracking-[-0.03em]">
        Add pet
      </p>
      <svg className="w-[18px] h-[18px]">
        <use href={`${sprite}#icon-plus`}></use>
      </svg>
    </Link>
  );
};

export default AddPet;
