import { useEffect, useState } from "react";
import Title from "../components/Title";
import NoticesFilters from "../components/notices/NoticesFilters";
import NoticesList from "../components/notices/NoticesList";
import { useAppDispatch, useAppSelector } from "../hooks/useReduxHooks";
import {
  // getAllCities,
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
  const [category, setCategory] = useState<string>("");
  const [sex, setSex] = useState<string>("");
  const [species, setSpecies] = useState<string>("");
  const [locationId, setLocationId] = useState<string>("");
  const [byPrice, setByPrice] = useState<null | boolean>(null);
  const [byPopularity, setByPopularity] = useState<null | boolean>(null);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getCategories());
    dispatch(getSex());
    dispatch(getSpecies());
    // dispatch(getAllCities());
  }, [dispatch]);

  useEffect(() => {
    dispatch(
      getAllNotices({
        page,
        filter,
        category,
        sex,
        species,
        locationId,
        byPrice,
        byPopularity,
      })
    );
  }, [
    byPopularity,
    byPrice,
    category,
    sex,
    dispatch,
    filter,
    locationId,
    page,
    species,
  ]);

  const handlePage = (newPage: number) => {
    setPage(newPage);
  };

  const handleFilter = (search: string) => {
    setFilter(search);
    setPage(1);
  };

  const handleCategory = (item: string) => {
    setCategory(item);
    setPage(1);
  };

  const handleGender = (item: string) => {
    setSex(item);
    setPage(1);
  };

  const handleSpecies = (item: string) => {
    setSpecies(item);
    setPage(1);
  };

  const handleLocationId = (item: string) => {
    setLocationId(item);
    setPage(1);
  };

  const handleByPrice = (item: boolean) => {
    setByPrice(item);
    setPage(1);
  };

  const handleByPopularity = (item: boolean) => {
    setByPopularity(item);
    setPage(1);
  };

  const resetFilter = () => {
    setFilter("");
    setPage(1);
  };

  return (
    <main>
      <div className="container pb-[32px] pt-[20px] tablet:pt-[53px] tablet:pb-[88px] desktop:pb-[80px] desktop:pt-[64px]">
        <div className="desktop:px-[32px]">
          <Title text="Find your favorite pet" />
        </div>
        <NoticesFilters
          handleFilter={handleFilter}
          resetFilter={resetFilter}
          handleCategory={handleCategory}
          handleSpecies={handleSpecies}
          handleLocationId={handleLocationId}
          handleByPrice={handleByPrice}
          handleByPopularity={handleByPopularity}
          handleGender={handleGender}
        />
        {data && data?.results?.length > 0 ? (
          <NoticesList noticesArr={data?.results} page={"notice"} />
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
