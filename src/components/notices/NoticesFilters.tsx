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
}

const NoticesFilters = ({ handleFilter, resetFilter }: NoticesFiltersProps) => {
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
    <>
      <SearchField handleFilter={handleFilter} resetFilter={resetFilter} />
      <Select
        options={getOptions(categoryList)}
        aria-label="Category"
        placeholder="Category"
      />
      <Select
        options={getOptions(genderList)}
        aria-label="Gender"
        placeholder="By gender"
      />
      <Select
        options={getOptions(speciesList)}
        aria-label="Species"
        placeholder="By type"
      />
      {/* <Select
        options={getOptionsCities}
        aria-label="Location"
        placeholder="Location"
      /> */}
    </>
  );
};

export default NoticesFilters;
