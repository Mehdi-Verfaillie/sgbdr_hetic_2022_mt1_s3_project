import React, { createContext, useContext } from "react";

interface StoreProviderProps<TDefaultValues> {
  defaultValues?: TDefaultValues;
  children: React.ReactNode;
}

// Let TS infer the return interface
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function createStoreContext<TStore, TDefaultValues extends Partial<TStore>>(
  useCreateStore: (defaultValues?: TDefaultValues) => TStore
) {
  const StoreContext = createContext<TStore>({} as TStore);

  const StoreProvider = ({ children, defaultValues }: StoreProviderProps<TDefaultValues>) => {
    const store = useCreateStore(defaultValues);
    return <StoreContext.Provider value={store}>{children}</StoreContext.Provider>;
  };

  return {
    StoreProvider,
    useStore: () => useContext(StoreContext),
  };
}
