import SearchField from "../SearchField";

export interface FilterData {
  search: string;
}

interface NoticesFiltersProps {
  handleFilter: (data: string) => void;
  resetFilter: () => void;
}

const NoticesFilters = ({ handleFilter, resetFilter }: NoticesFiltersProps) => {
  return (
    <>
      <SearchField handleFilter={handleFilter} resetFilter={resetFilter} />
    </>
  );
};

export default NoticesFilters;
