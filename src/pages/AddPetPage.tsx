import AddPetForm from "../components/forms/AddPetForm";
import { useEffect } from "react";
import { useAppDispatch } from "../hooks/useReduxHooks";
import { getSpecies } from "../redux/dataBase/dataBaseOperation";
import PetBlock from "../components/PetBlock";

const AddPetPage = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getSpecies());
  }, [dispatch]);

  return (
    <main className="container pb-[20px] tablet:pb-[32px]">
      <div className="desktop:flex desktop:gap-[32px]">
        <PetBlock />
        <section className="mt-[10px] tablet:mt-[16px] rounded-30 tablet:rounded-60 pt-[28px] pb-[20px] px-[20px] tablet:py-[40px] tablet:px-[136px] desktop:px-[80px] desktop:flex desktop:items-center desktop:my-[0px] bg-white">
          <div>
            <h1 className="mb-[24px] font-bold text-28 tablet:text-32 leading-[1] tracking-[-0.03em]">
              Add my pet /{" "}
              <span className="text-14 tablet:text-16 text-textGrey leading-[1.29] tablet:leading-[1.25]">
                Personal details
              </span>
            </h1>

            <AddPetForm />
          </div>
        </section>
      </div>
    </main>
  );
};

export default AddPetPage;
