import { useQuery, UseQueryResult } from "react-query";
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
    [process.env.REACT_APP_RESOURCE, page, column, orderType],
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
