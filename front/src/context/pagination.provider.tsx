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
  orderType: "ASC" | "DESC";
}

const useCreatePaginationStore = (defaultValues?: DefaultValues) => {
  const [currentPage, setCurrentPage] = useState(defaultValues?.currentPage ?? 1);
  const [pageSize] = useState(defaultValues?.pageSize ?? DEFAULT_PAGE_SIZE);
  const [total, setTotal] = useState(defaultValues?.total ?? 0);
  const [orderType, setOrderType] = useState(defaultValues?.orderType ?? "ASC");

  const pageLimit = useMemo(() => getLimit(total, pageSize), [total, pageSize]);
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
    setTotal,
    pageLimit,
    setOrder,
    goToPage,
    nextPage,
    previousPage,
  };
};

const PaginationStoreContext = createStoreContext(useCreatePaginationStore);
export const PaginationProvider = PaginationStoreContext.StoreProvider;
export const usePagination = PaginationStoreContext.useStore;
