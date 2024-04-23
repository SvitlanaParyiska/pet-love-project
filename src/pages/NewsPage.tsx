import { useEffect, useState } from "react";
import Title from "../components/Title";
import { useAppDispatch, useAppSelector } from "../hooks/useReduxHooks";
import { getAllNews } from "../redux/dataBase/dataBaseOperation";
import NewsList from "../components/news/NewsList";
import SearchField from "../components/SearchField";
import Pagination from "../components/Pagination";
import { BtnType } from "../types/pagination";
import { selectNews } from "../redux/dataBase/dataBaseSelectors";

const NewsPage = () => {
  const data = useAppSelector(selectNews);
  const [filter, setFilter] = useState<string>("");
  const [page, setPage] = useState<number>(1);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getAllNews({ filter, page }));
  }, [dispatch, filter, page]);

  const handlePage = (type: BtnType) => {
    if (type === BtnType.Prev) {
      setPage((prev) => prev - 1);
    } else {
      setPage((prev) => prev + 1);
    }
  };

  const handleFilter = (data: string) => {
    setFilter(data);
    setPage(1);
  };

  return (
    <main>
      <div className="container pb-[32px] desktop:px-[63px]">
        <Title text="News" />
        <SearchField changeFilter={handleFilter} />
        {data && <NewsList newsArr={data?.results} />}
        {data && (
          <Pagination
            page={page}
            handlePage={handlePage}
            totalPages={data?.totalPages}
          />
        )}
      </div>
    </main>
  );
};

export default NewsPage;
