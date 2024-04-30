import { useEffect, useState } from "react";
import Title from "../components/Title";
import { useAppDispatch, useAppSelector } from "../hooks/useReduxHooks";
import { getAllNews } from "../redux/dataBase/dataBaseOperation";
import NewsList from "../components/news/NewsList";
import SearchField from "../components/SearchField";
import PaginationList from "../components/PaginationList";
import { selectNews } from "../redux/dataBase/dataBaseSelectors";

const NewsPage = () => {
  const data = useAppSelector(selectNews);
  const [filter, setFilter] = useState<string>("");
  const [page, setPage] = useState<number>(1);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getAllNews({ filter, page }));
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
        <div className="flex flex-col gap-[20px] tablet:flex-row tablet:justify-between tablet:items-end tablet:mb-[44px] desktop:mb-[60px]">
          <Title text="News" />
          <SearchField handleFilter={handleFilter} resetFilter={resetFilter} color={"grey"} />
        </div>

        {data && data?.results?.length > 0 ? (
          <NewsList newsArr={data?.results} />
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

export default NewsPage;
