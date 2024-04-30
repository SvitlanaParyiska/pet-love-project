import { Formik } from "formik";
import Input from "./ui/Input";
import sprite from "/images/sprite.svg";

interface Color {
  white: string;
  grey: string;
}

export interface FilterData {
  search: string;
}

interface FilterProps {
  handleFilter: (data: string) => void;
  resetFilter: () => void;
  color: string;
}

const SearchField = ({ handleFilter, resetFilter, color }: FilterProps) => {
  const colorVariants = {
    white: "bg-white",
    grey: "bg-transparent",
  };
  return (
    <Formik
      initialValues={{ search: "" }}
      onSubmit={({ search }: FilterData) => {
        handleFilter(search.trim());
      }}
    >
      {({ values, handleChange, handleSubmit, handleReset }) => (
        <>
          <form onSubmit={handleSubmit} noValidate className="relative ">
            <Input
              id={"search"}
              type="text"
              name="search"
              value={values.search}
              onChange={handleChange}
              placeholder="Search"
              inputStyles={`${
                colorVariants[color as keyof Color]
              } pl-[12px] py-[12px] tablet:pl-[14px] tablet:py-[14px] tablet:w-[230px]`}
              wrapperStyles=""
            />
            <button
              type="submit"
              className="absolute top-[13px] right-[12px] tablet:top-[17px]  tablet:right-[14px]"
            >
              <svg
                aria-label="search icon"
                className="w-[18px] h-[18px] stroke-[#262626] fill-none"
              >
                <use href={`${sprite}#icon-search`}></use>
              </svg>
            </button>
            {values.search.length > 0 && (
              <button
                type="button"
                onClick={() => {
                  handleReset();
                  resetFilter();
                }}
                className="absolute top-[13px] right-[33px] tablet:top-[17px]  tablet:right-[35px]"
              >
                <svg
                  aria-label="reset icon"
                  className="w-[18px] h-[18px]  stroke-[#262626]"
                >
                  <use href={`${sprite}#icon-cross-small`}></use>
                </svg>
              </button>
            )}
          </form>
        </>
      )}
    </Formik>
  );
};

export default SearchField;
