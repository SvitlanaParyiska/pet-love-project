import { useEffect, useState } from "react";
import Title from "../components/Title";
import NoticesFilters from "../components/notices/NoticesFilters";
import NoticesList from "../components/notices/NoticesList";
import { useAppDispatch, useAppSelector } from "../hooks/useReduxHooks";
import {
  getAllCities,
  getAllNotices,
  getCategories,
  getSex,
  getSpecies,
} from "../redux/dataBase/dataBaseOperation";
import { selectNotices } from "../redux/dataBase/dataBaseSelectors";
import PaginationList from "../components/PaginationList";

const NoticesPage = () => {
  const data = useAppSelector(selectNotices);
  const [filter, setFilter] = useState<string>("");
  const [page, setPage] = useState<number>(1);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getCategories());
    dispatch(getSex());
    dispatch(getSpecies());
    // dispatch(getAllCities());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getAllNotices({ page, filter }));
  }, [dispatch, filter, page]);

  const handlePage = (newPage: number) => {
    setPage(newPage);
  };

  const handleFilter = (search: string) => {
    setFilter(search);
    setPage(1);
  };

  const resetFilter = () => {
    setFilter("");
    setPage(1);
  };

  return (
    <main>
      <div className="container pb-[32px] pt-[20px] desktop:px-[63px]">
        <Title text="Find your favorite pet" />
        <NoticesFilters handleFilter={handleFilter} resetFilter={resetFilter} />
        {data && data?.results?.length > 0 ? (
          <NoticesList noticesArr={data?.results} />
        ) : (
          <p>Sorry, nothing... Try to change the search value </p>
        )}
        {data && data.totalPages > 1 && (
          <div className="flex justify-center">
            <PaginationList
              page={page}
              handlePage={handlePage}
              totalPages={data?.totalPages}
            />
          </div>
        )}
      </div>
    </main>
  );
};

export default NoticesPage;
