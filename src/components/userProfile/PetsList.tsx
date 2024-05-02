import { nanoid } from "nanoid";
import { useAppSelector } from "../../hooks/useReduxHooks";
import { selectUserPets } from "../../redux/user/userSelectors";
import PetsItem from "./PetsItem";
import { Link } from "react-router-dom";

const PetsList = () => {
  const userPets = useAppSelector(selectUserPets);

  return (
    <>
      {userPets && userPets?.length > 0 ? (
        <ul className="mt-[20px] mb-[20px] tablet:flex tablet:flex-wrap desktop:block justify-center">
          {userPets?.map((pet) => (
            <PetsItem pet={pet} key={nanoid()} />
          ))}
        </ul>
      ) : (
        <p className="mt-[20px] mb-[20px] text-14 leading-[1.33] tracking-[-0.02em]">
          Your pets list is empty.
          <Link
            to="/add-pet"
            className="text-accent text-14  underline  leading-[1.33] tracking-[-0.02em]"
          >
            Add pet
          </Link>
        </p>
      )}
    </>
  );
};

export default PetsList;
