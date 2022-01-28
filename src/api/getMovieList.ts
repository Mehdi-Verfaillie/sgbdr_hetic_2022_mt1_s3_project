import axios from "axios";
import { API_URL, RESOURCE } from "./config";
import { GetListResult, Movie } from "./types";

export const GetMovieList = async (
  page = 0,
  pageLimit = 10
): Promise<GetListResult<Movie>> => {
  return (
    await axios.get<GetListResult<Movie>>(`${API_URL}/${RESOURCE}`, {
      withCredentials: false,
      params: { page, limit: pageLimit },
    })
  ).data;
};
