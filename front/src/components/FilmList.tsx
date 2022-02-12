import { useGetMovieList } from "@/api/useGetMovieList";
import { PaginationProvider, usePagination } from "@/context/pagination.provider";
import React, { useEffect } from "react";
import { StatefulList } from "./StatefulList";

const FilmListWithoutPagination = (): JSX.Element => {
  const paginationStore = usePagination();
  const query = useGetMovieList(paginationStore.currentPage, paginationStore.pageSize);

  useEffect(() => {
    paginationStore.setTotal(query.total ?? 0);
  }, [paginationStore, query.total]);

  return (
    <StatefulList
      isError={query.isError}
      isEmpty={query.isEmpty}
      isLoading={query.isLoading}
      list={query.list}
    />
  );
};

export const FilmList = (): JSX.Element => (
  <PaginationProvider>
    <FilmListWithoutPagination />
  </PaginationProvider>
);
