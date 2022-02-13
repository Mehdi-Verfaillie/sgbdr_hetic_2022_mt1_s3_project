import axios from "axios";
import { GetListResult, Movie } from "./types";

export const GetMovieList = async (
  page = 0,
  pageLimit = 10,
  column = "film",
  orderType = "ASC",
): Promise<GetListResult<Movie>> => {
  return (
    await axios.get<GetListResult<Movie>>(`${process.env.REACT_APP_API_URL}/${process.env.REACT_APP_RESOURCE}`, {
      withCredentials: false,
      params: { page, limit: pageLimit, column, orderType },
    })
  ).data;
};
