import AddPet from "./AddPet";
import PetsList from "./PetsList";

const PetsBlock = () => {
  return (
    <>
      <div className="flex justify-between pt-[40px]">
        <h3 className="font-bold text-16 leading-[1.25]">My pets</h3>
        <AddPet />
      </div>
      <PetsList />
    </>
  );
};

export default PetsBlock;
