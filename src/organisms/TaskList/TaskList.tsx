import { Card } from "@atoms/index";
import { TaskItem } from "@molecules/TaskItem";
import { DataContext } from "@providers/data";
import { useContext } from "react";

const TaskList = () => {
  const data = useContext(DataContext);
  const handleOnDelete = (index: number) => {
    data.remove(index);
  };
  const handleCheck = (index: number) => {
    data.update(index, { text: data.data[index].text, checked: !data.data[index].checked });
  };
  return (
    <Card>
      <>
        <h1>Tasks</h1>
        {data.data.map((item, index) => (
          <TaskItem
            key={`${item.text}${index}`}
            value={item.text}
            onClickDelete={() => handleOnDelete(index)}
            onClickCheck={() => handleCheck(index)}
            checked={item.checked}
          />
        ))}
      </>
    </Card>
  );
};

export { TaskList };
