import { IItem } from "@hooks/useLocalStorage";
import { createContext } from "react";

export const DataContext = createContext<{
  data: IItem[];
  insert: (item: IItem) => void;
  update: (
    index: number,
    newItem: IItem
  ) => void;
  remove: (index: number) => void;
}>({
  data: [],
  insert: () => {},
  update: () => {},
  remove: () => {},
});

export const DataContextProvider = DataContext.Provider;
