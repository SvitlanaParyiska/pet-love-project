import { nanoid } from "nanoid";
import { useAppSelector } from "../../hooks/useReduxHooks";
import { selectUserPets } from "../../redux/user/userSelectors";
import PetsItem from "./PetsItem";

const PetsList = () => {
  const userPets = useAppSelector(selectUserPets);

  return (
    <>
      {userPets && (
        <ul className="mt-[20px] mb-[20px] tablet:flex tablet:flex-wrap desktop:block justify-center">
          {userPets?.map((pet) => (
            <PetsItem pet={pet} key={nanoid()} />
          ))}
        </ul>
      )}
    </>
  );
};

export default PetsList;
