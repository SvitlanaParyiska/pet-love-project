import { getBirthday } from "../../helpers/noticeHelper";
import sprite from "/images/sprite.svg";

interface ModalEditUser {
  item: {
    _id: string;
    species: string;
    category: string;
    title: string;
    name: string;
    birthday: string;
    comment: string;
    sex: string;
    location: string;
    imgURL: string;
    createdAt: string;
    user: string;
    popularity: number;
    updatedAt?: string;
  };
  fav: boolean;
  handleFavorite: () => void;
}

const ModalNotice = ({ item, fav, handleFavorite }: ModalEditUser) => {
  return (
    <div className="w-[330px] mx-auto">
      <img
        src={item.imgURL}
        alt="pet"
        className="mx-auto rounded-full w-[150px] h-[150px] object-cover mb-[24px]"
      />
      <div className="mb-[22px] flex items-center justify-center gap-[84px]">
        <svg aria-label="star" className="w-[16px] h-[16px]">
          <use href={`${sprite}#icon-star`} />
        </svg>
        <p className="text-14 text-textAccent leading-[1.29]">
          {item.popularity}
        </p>
      </div>

      <h3 className="mb-[8px] font-bold text-center text-textAccent tablet:text-18 leading-[1.25]tablet:leading-[1.33] ">
        {item.title}
      </h3>

      <div className="mb-[16px] flex justify-center gap-[14px]">
        <div>
          <p className="mb-[2px] text-10 text-darkGrey leading-[1.4] tracking-[-0.02em]">
            Name
          </p>
          <p className="text-12 capitalize leading-[1.17] tracking-[-0.02em]">
            {item.name}
          </p>
        </div>
        <div>
          <p className="mb-[2px] text-10 text-darkGrey leading-[1.4] tracking-[-0.02em]">
            Birthday
          </p>
          <p className="text-12 leading-[1.17] tracking-[-0.02em]">
            {getBirthday(item.birthday)}
          </p>
        </div>
        <div>
          <p className="mb-[2px] text-10 text-darkGrey capitalize leading-[1.4] tracking-[-0.02em]">
            Sex
          </p>
          <p className="text-12 capitalize leading-[1.17] tracking-[-0.02em]">
            {item.sex}
          </p>
        </div>
        <div>
          <p className="mb-[2px] text-10 text-darkGrey leading-[1.4] tracking-[-0.02em]">
            Species
          </p>
          <p className="text-12 capitalize leading-[1.17] tracking-[-0.02em]">
            {item.species}
          </p>
        </div>
        <div>
          <p className="mb-[2px] text-10 text-darkGrey leading-[1.4] tracking-[-0.02em]">
            Category
          </p>
          <p className="text-12 capitalize leading-[1.17] tracking-[-0.02em]">
            {item.category}
          </p>
        </div>
      </div>
      <p className="mb-[40px] text-14 text-center leading-[1.29] tracking-[-0.02em]">
        {item.comment}
      </p>
      <div className="flex gap-[10px] justify-center">
        {fav ? (
          <button
            type="button"
            onClick={handleFavorite}
            className="w-[160px] py-[14px] rounded-30 bg-accent transition-all duration-350 active:bg-buttonAccent focus:bg-buttonAccent hover:bg-buttonAccent text-16 tablet:text-16 leading-[1.25] tracking-[-0.03em] text-white flex gap-[8px] items-center justify-center"
          >
            <p>Delete </p>
            <svg aria-label="heart" className="w-[18px] h-[18px]">
              <use href={`${sprite}#icon-heart-white`} />
            </svg>
          </button>
        ) : (
          <button
            type="button"
            onClick={handleFavorite}
            className="w-[160px] py-[14px] rounded-30 bg-accent transition-all duration-350 active:bg-buttonAccent  hover:bg-buttonAccent text-16 tablet:text-16 leading-[1.25] tracking-[-0.03em] text-white flex gap-[8px] items-center justify-center"
          >
            <p>Add to</p>
            <svg aria-label="heart" className="w-[18px] h-[18px]">
              <use href={`${sprite}#icon-heart-white`} />
            </svg>
          </button>
        )}

        <button
          type="button"
          className="w-[160px] rounded-30 p-[14px] bg-light  transition-all duration-350 active:bg-buttonHover  hover:bg-buttonHover text-16 tablet:text-16 leading-[1.25] tracking-[-0.03em] text-accent"
        >
          <a href="tel:+380500000000">Contact</a>
        </button>
      </div>
    </div>
  );
};

export default ModalNotice;
