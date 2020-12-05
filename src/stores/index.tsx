import React, { createContext, FC, useContext } from "react";
import UserStore from "./UserStore";

export interface IStore {
  UserStore: typeof UserStore;
}

const StoreContext = createContext<IStore>({
  UserStore
});

/**
 * Хук для использования стора
 */
export const useStore = (): IStore => useContext(StoreContext);

/**
 * HOC для использования стора
 */
export const withStore = (Component: FC<IStore>) => (
  props: unknown
): JSX.Element => {
  const connectedComponent = <Component {...props} {...useStore()} />;
  return connectedComponent;
};
