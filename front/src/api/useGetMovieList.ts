import { useQuery, UseQueryResult } from "react-query";
import { RESOURCE } from "./config";
import { GetMovieList } from "./getMovieList";
import { Movie } from "./types";

interface Result {
  isLoading: boolean;
  isError: boolean;
  isEmpty: boolean;
  list?: Movie[];
  total?: number;
  isPreviousData: boolean;
  refetch: () => Promise<UseQueryResult>;
}

export const useGetMovieList = (page: number, pageLimit: number, column: string, orderType: "ASC" | "DESC"): Result => {
  const { isLoading, isError, data, isPreviousData, refetch } = useQuery(
    [RESOURCE, page, column, orderType],
    () => GetMovieList(page, pageLimit, column, orderType),
    { keepPreviousData: true }
  );  

  return {
    isLoading,
    isError,
    isEmpty: !data?.results.length,
    list: data?.results,
    total: data?.total,
    isPreviousData,
    refetch,
  };
};
