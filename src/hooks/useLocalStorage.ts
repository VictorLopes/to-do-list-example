import { useState } from "react";

export interface IItem {
  text: string;
  checked: boolean;
}

export const useLocalStorage = (key = "db") => {
  const getStoredData = (): Array<IItem> => {
    const storedData = localStorage.getItem(key);
    return storedData ? JSON.parse(storedData) : [];
  };

  const [data, setData] = useState(getStoredData);

  const insert = (item: IItem) => {
    const updatedData = [...data, item];
    setData(updatedData);
    localStorage.setItem(key, JSON.stringify(updatedData));
  };

  const update = (index: number, newItem: IItem) => {
    const updatedData = data.map((item: IItem, i: number) =>
      i === index ? newItem : item
    );
    setData(updatedData);
    localStorage.setItem(key, JSON.stringify(updatedData));
  };

  const remove = (index: number) => {
    const updatedData = data.filter(
      (_: { text: string }, i: number) => i !== index
    );
    setData(updatedData);
    localStorage.setItem(key, JSON.stringify(updatedData));
  };

  return { data, setData, insert, update, remove };
};
