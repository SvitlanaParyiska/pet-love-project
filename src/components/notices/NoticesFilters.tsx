import { useAppSelector } from "../../hooks/useReduxHooks";
import {
  // selectCities,
  selectNoticesCategories,
  selectNoticesSex,
  selectNoticesSpecies,
} from "../../redux/dataBase/dataBaseSelectors";
import SearchField from "../SearchField";
import Select from "react-select";
import { getOptions } from "../../helpers/filtersHelper";

// import { useMemo } from "react";

export interface FilterData {
  search: string;
}

interface NoticesFiltersProps {
  handleFilter: (data: string) => void;
  resetFilter: () => void;
  handleCategory: (data: string) => void;
  handleSpecies: (data: string) => void;
  handleLocationId: (data: string) => void;
  handleByPrice: (data: boolean) => void;
  handleByPopularity: (data: boolean) => void;
  handleGender: (data: string) => void;
}

const NoticesFilters = ({
  handleFilter,
  resetFilter,
  handleCategory,
  handleSpecies,
  handleLocationId,
  handleByPrice,
  handleByPopularity,
  handleGender,
}: NoticesFiltersProps) => {
  const categoryList = useAppSelector(selectNoticesCategories);
  const genderList = useAppSelector(selectNoticesSex);
  const speciesList = useAppSelector(selectNoticesSpecies);
  // const citiesList = useAppSelector(selectCities);

  // const getOptionsCities = useMemo(
  //   () =>
  //     citiesList.map(
  //       (item: { _id: string; stateEn: string; cityEn: string }) => {
  //         return { value: item._id, label: `${item.stateEn}, ${item.cityEn}` };
  //       }
  //     ),
  //   [citiesList]
  // );

  return (
    <div className="p-[20px] bg-light rounded-30 mt-[40px]">
      <div className="desktop:flex desktop:gap-[16px]">
        <div className="tablet:flex tablet:gap-[16px]">
          <SearchField
            handleFilter={handleFilter}
            resetFilter={resetFilter}
            color={"white"}
          />
          <div className="flex gap-[8px] tablet:gap-[16px] my-[12px]">
            <Select
              options={getOptions(categoryList, "Show all")}
              aria-label="Category"
              placeholder="Category"
              onChange={(e) => {
                if (e) {
                  handleCategory(e.value);
                }
              }}
              styles={{
                control: (baseStyles) => ({
                  ...baseStyles,
                  borderRadius: "30px",
                  color: "#262626",
                  fontFamily: "inherit",
                  fontWeight: 500,
                  fontSize: "14px",
                  width: "143px",
                }),
              }}
            />
            <Select
              options={getOptions(genderList, "Show all")}
              aria-label="Gender"
              placeholder="By gender"
              onChange={(e) => {
                if (e) {
                  handleGender(e.value);
                }
              }}
              styles={{
                control: (baseStyles) => ({
                  ...baseStyles,
                  borderRadius: "30px",
                  color: "#262626",
                  fontFamily: "inherit",
                  fontWeight: 500,
                  fontSize: "14px",
                  width: "143px",
                }),
              }}
            />
          </div>
        </div>
        <div className="tablet:flex tablet:gap-[16px]">
          <Select
            options={getOptions(speciesList, "Show all")}
            aria-label="Species"
            placeholder="By type"
            onChange={(e) => {
              if (e) {
                handleSpecies(e.value);
              }
            }}
            styles={{
              control: (baseStyles) => ({
                ...baseStyles,
                borderRadius: "30px",
                color: "#262626",
                fontFamily: "inherit",
                fontWeight: 500,
                lineHeight: "1.29",
                letterSpacing: "-0.03em",
                fontSize: "14px",
                padding: "2px",
              }),
            }}
          />
          <Select
            options={[{ value: "text", label: "text" }]}
            aria-label="Location"
            placeholder="Location"
            onChange={(e) => {
              if (e) {
                handleLocationId(e.value);
              }
            }}
            styles={{
              control: (baseStyles) => ({
                ...baseStyles,
                borderRadius: "30px",
                color: "#262626",
                fontFamily: "inherit",
                fontWeight: 500,
                lineHeight: "1.29",
                letterSpacing: "-0.03em",
                fontSize: "14px",
                padding: "2px",
                marginTop: "12px",
                "@media (max-width: 500px)": {
                  marginTop: "0",
                },
              }),
            }}
          />
        </div>
      </div>

      <div className="mt-[20px] flex flex-wrap mb-[10px] pt-[20px] border-t-1 border-borderTop">
        <fieldset id="group1" className="">
          <label>
            <input
              type="radio"
              name="group1"
              value="popular"
              onChange={() => handleByPopularity(false)}
            />
            <span className="cursor-pointer">Popular</span>
          </label>
          <label>
            <input
              type="radio"
              name="group1"
              value="unpopular"
              onChange={() => handleByPopularity(true)}
            />
            <span className="cursor-pointer">Unpopular</span>
          </label>
        </fieldset>

        <fieldset id="group2" className="mt-[40px] tablet:mt-[0px]">
          <label>
            <input
              type="radio"
              name="group2"
              value="cheap"
              onChange={() => handleByPrice(false)}
            />
            <span className="cursor-pointer">Cheap</span>
          </label>
          <label>
            <input
              type="radio"
              name="group2"
              value="expensive"
              onChange={() => handleByPrice(true)}
            />
            <span className="cursor-pointer">Expensive</span>
          </label>
        </fieldset>
      </div>
    </div>
  );
};

export default NoticesFilters;
