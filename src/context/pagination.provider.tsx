import React, { useCallback } from "react";
import create from "zustand";
import createContext from "zustand/context";

const DEFAULT_PAGE_SIZE = 10;

interface PaginationStateValue {
  currentPage: number;
  pageLimit: number;
  pageSize: number;
}

interface PaginationState extends PaginationStateValue {
  previousPage: () => void;
  nextPage: () => void;
  goToPage: (value: number) => void;
  setTotal: (total: number) => void;
}

const clamp = (value: number, min: number, max: number) => Math.max(Math.min(value, max), min);
const getLimit = (total: number, pageSize: number) => Math.ceil(total / pageSize);

export const createPaginationStore = (defaultValues?: Partial<PaginationStateValue>) =>
  create<PaginationState>((set) => ({
    currentPage: defaultValues?.currentPage ?? 1,
    pageLimit: defaultValues?.pageLimit ?? 1,
    pageSize: defaultValues?.pageSize ?? DEFAULT_PAGE_SIZE,
    goToPage(value: number) {
      set((state) => ({ currentPage: clamp(value, 1, state.pageLimit) }));
    },
    previousPage() {
      set((state) => ({ currentPage: clamp(this.currentPage - 1, 1, state.pageLimit) }));
    },
    nextPage() {
      set((state) => ({ currentPage: clamp(this.currentPage + 1, 1, state.pageLimit) }));
    },
    setTotal: (total: number) =>
      set((state) => {
        const limit = getLimit(total, state.pageSize);
        return { pageLimit: limit, currentPage: clamp(state.currentPage, 1, limit) };
      }),
  }));

const { Provider, useStore } = createContext<PaginationState>();

interface Props {
  children: React.ReactNode;
  defaultValues?: Partial<PaginationStateValue>;
}

export const PaginationProvider = (props: Props): JSX.Element => {
  const _createPaginationStore = useCallback(
    () => createPaginationStore(props.defaultValues),
    [props.defaultValues]
  );
  return <Provider createStore={_createPaginationStore}>{props.children}</Provider>;
};

export const usePaginationStore = useStore;
