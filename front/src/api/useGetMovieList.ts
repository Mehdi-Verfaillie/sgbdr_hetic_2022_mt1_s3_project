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

export const useGetMovieList = (page: number, pageLimit: number): Result => {
  const { isLoading, isError, data, isPreviousData, refetch } = useQuery(
    [RESOURCE, page],
    () => GetMovieList(page, pageLimit),
    { keepPreviousData: true }
  );

  return {
    isLoading,
    isError,
    isEmpty: !data?.data.length,
    list: data?.data,
    total: data?.total,
    isPreviousData,
    refetch,
  };
};
