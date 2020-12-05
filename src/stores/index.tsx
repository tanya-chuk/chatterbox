import React, { createContext, FC, useContext } from "react";
import UserStore from "./UserStore";

export interface IStore {
  UserStore: typeof UserStore;
}

const StoreContext = createContext<IStore>({
  UserStore
});

export const withStore = (Component: FC<IStore>) => (
  props: unknown
): JSX.Element => {
  const connectedComponent = (
    <Component {...props} {...useContext(StoreContext)} />
  );
  return connectedComponent;
};
