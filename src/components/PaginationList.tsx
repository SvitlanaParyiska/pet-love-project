import Pagination from "@mui/material/Pagination";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import { PaginationItem } from "@mui/material";

interface PaginationProps {
  page: number;
  totalPages: number;
  handlePage: (newPage: number) => void;
}

const PaginationList = ({ page, handlePage, totalPages }: PaginationProps) => {
  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    if (event) {
      handlePage(value);
    }
  };

  return (
    <Pagination
      count={totalPages}
      page={page}
      variant="outlined"
      color="secondary"
      onChange={handleChange}
      showFirstButton
      showLastButton
      renderItem={(item) => (
        <PaginationItem
          slots={{
            first: KeyboardDoubleArrowLeftIcon,
            last: KeyboardDoubleArrowRightIcon,
          }}
          {...item}
        />
      )}
    />
  );
};

export default PaginationList;
