import { createStoreContext } from "./createStore.context";
import { useCallback, useMemo, useState } from "react";

const DEFAULT_PAGE_SIZE = 10;
const clamp = (value: number, min: number, max: number): number =>
  Math.max(Math.min(value, max), min);
const getLimit = (total: number, pageSize: number): number => Math.ceil(total / pageSize);

interface DefaultValues {
  currentPage?: number;
  total?: number;
  pageSize?: number;
  column?: "film" | "category" | "rental";
  orderType: "ASC" | "DESC";
}

const useCreatePaginationStore = (defaultValues?: DefaultValues) => {
  const [currentPage, setCurrentPage] = useState(defaultValues?.currentPage ?? 1);
  const [pageSize] = useState(defaultValues?.pageSize ?? DEFAULT_PAGE_SIZE);
  const [total, setTotal] = useState(defaultValues?.total ?? 0);
  const [orderType, setOrderType] = useState(defaultValues?.orderType ?? "ASC");
  const [column, setColumn] = useState("film");

  const pageLimit = useMemo(() => getLimit(total, pageSize), [total, pageSize]);
  const _setColumn = (column: "film" | "category" | "rental") => setColumn(column);
  const setOrder = (orderType: "ASC" | "DESC") => setOrderType(orderType);
 
  const goToPage = useCallback(
    (page: number) => {
      setCurrentPage(clamp(page, 1, pageLimit));
    },
    [pageLimit]
  );

  const nextPage = useCallback(() => goToPage(currentPage + 1), [currentPage, goToPage]);
  const previousPage = useCallback(() => goToPage(currentPage - 1), [currentPage, goToPage]);

  return {
    currentPage,
    pageSize,
    total,
    orderType,
    column,
    setTotal,
    pageLimit,
    _setColumn,
    setOrder,
    goToPage,
    nextPage,
    previousPage,
  };
};

const PaginationStoreContext = createStoreContext(useCreatePaginationStore);
export const PaginationProvider = PaginationStoreContext.StoreProvider;
export const usePagination = PaginationStoreContext.useStore;
