import { getBirthday } from "../../helpers/noticeHelper";
import { useAppDispatch } from "../../hooks/useReduxHooks";
import { deleteUserPet } from "../../redux/user/userOperation";
import sprite from "/images/sprite.svg";

interface PetsProps {
  pet: {
    _id: string;
    name: string;
    title: string;
    imgURL: string;
    species: string;
    birthday: string;
    sex: string;
  };
}

const PetsItem = ({ pet }: PetsProps) => {
  const dispatch = useAppDispatch();

  const deletePet = () => {
    dispatch(deleteUserPet(pet._id));
  };

  return (
    <li className="relative flex gap-[10px] tablet:w-[305px] p-[16px]">
      <img
        src={pet.imgURL}
        alt="pet"
        className="rounded-full w-[66px] h-[66px] tablet:w-[77px] tablet:h-[77px] desktop:w-[90px] desktop:h-[90px] object-cover"
      />
      <div>
        <h3 className="mb-[8px] font-bold text-textAccent tablet:text-18 leading-[1.25]tablet:leading-[1.33] ">
          {pet.title}
        </h3>

        <div className="mb-[16px] flex gap-[10px] flex-wrap">
          <div>
            <p className="mb-[2px] text-10 text-darkGrey leading-[1.4] tracking-[-0.02em]">
              Name
            </p>
            <p className="text-12 capitalize leading-[1.17] tracking-[-0.02em]">
              {pet.name}
            </p>
          </div>
          <div>
            <p className="mb-[2px] text-10 text-darkGrey leading-[1.4] tracking-[-0.02em]">
              Birthday
            </p>
            <p className="text-12 leading-[1.17] tracking-[-0.02em]">
              {getBirthday(pet.birthday)}
            </p>
          </div>
          <div>
            <p className="mb-[2px] text-10 text-darkGrey capitalize leading-[1.4] tracking-[-0.02em]">
              Sex
            </p>
            <p className="text-12 capitalize leading-[1.17] tracking-[-0.02em]">
              {pet.sex}
            </p>
          </div>
          <div>
            <p className="mb-[2px] text-10 text-darkGrey leading-[1.4] tracking-[-0.02em]">
              Species
            </p>
            <p className="text-12 capitalize leading-[1.17] tracking-[-0.02em]">
              {pet.species}
            </p>
          </div>
        </div>
      </div>
      <button
        type="button"
        onClick={deletePet}
        className="absolute top-[12px] right-[12px] bg-light rounded-full p-[7px] flex items-center justify-center"
      >
        <svg aria-label="icon male" className="w-[18px] h-[18px] ">
          <use href={`${sprite}#icon-trash-2`} />
        </svg>
      </button>
    </li>
  );
};

export default PetsItem;
