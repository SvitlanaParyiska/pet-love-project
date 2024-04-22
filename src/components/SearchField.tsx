interface FilterProps {
  changeFilter: (data: string) => void;
}

const SearchField = ({ changeFilter }: FilterProps) => {
  return <div onChange={() => changeFilter("test")}>SearchField</div>;
};

export default SearchField;
