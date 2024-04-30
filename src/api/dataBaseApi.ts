import axios from "axios";

axios.defaults.baseURL = "https://petlove.b.goit.study/api/";

export const getNotices = async (
  page: number,
  filter: string,
  category: string,
  sex: string,
  species: string,
  locationId: string,
  byPrice: boolean | null,
  byPopularity: boolean | null
) => {
  if (byPrice === null && byPopularity === null) {
    const { data } = await axios.get("notices", {
      params: {
        keyword: filter,
        category,
        sex,
        species,
        locationId,
        page,
      },
    });
    return data;
  } else if (byPrice !== null) {
    const { data } = await axios.get("notices", {
      params: {
        keyword: filter,
        category,
        sex,
        species,
        locationId,
        page,
        byPrice,
      },
    });
    return data;
  } else if (byPopularity !== null) {
    const { data } = await axios.get("notices", {
      params: {
        keyword: filter,
        category,
        sex,
        species,
        locationId,
        page,
        byPopularity,
      },
    });
    return data;
  } else {
    const { data } = await axios.get("notices", {
      params: {
        keyword: filter,
        category,
        sex,
        species,
        locationId,
        page,
        byPrice,
        byPopularity,
      },
    });
    return data;
  }
};

export const getNoticesCategories = async () => {
  const { data } = await axios.get("notices/categories");
  return data;
};

export const getNoticesSex = async () => {
  const { data } = await axios.get("notices/sex");
  return data;
};

export const getNoticesSpecies = async () => {
  const { data } = await axios.get("notices/species");
  return data;
};

export const getNoticesById = async (id: string) => {
  const { data } = await axios.get(`notices/${id}`);
  return data;
};

export const getCities = async () => {
  const { data } = await axios.get("cities");
  return data;
};

export const getFriends = async () => {
  const { data } = await axios.get("friends");
  return data;
};

export const getNews = async (page: number, filter: string) => {
  const { data } = await axios.get("news", {
    params: { keyword: filter, page },
  });
  return data;
};
