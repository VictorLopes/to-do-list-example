import { Button, Input } from "@atoms/index";
import styles from "./InsertBar.module.scss";
import { useContext, useState } from "react";
import { DataContext } from "@providers/data";

interface ICardProps {}

const InsertBar = (props: ICardProps) => {
  const data = useContext(DataContext);
  const [value, setValue] = useState("");

  const handleOnAdd = () => {
    if (value !== "") {
      const text = value;
      data.insert({ text, checked: false });
      setValue("");
    }
  };

  const handleOnChangeText = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <div {...props} className={styles.container}>
      <Input value={value} onChange={handleOnChangeText} />
      <Button title="✎ Add" onClick={handleOnAdd} />
    </div>
  );
};

export { InsertBar };
