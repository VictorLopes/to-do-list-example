import { Check } from "@atoms/Check";
import { Button } from "@atoms/Button";
import { useWindow } from "@hooks/index";
import { useSwipeable } from "react-swipeable";
import { useState } from "react";
import classNames from "classnames";
import styles from "./TaskItem.module.scss";

interface ITaskItemProps {
  value: string;
  onClickDelete: () => void;
  onClickCheck: () => void;
  checked?: boolean;
}

const TaskItem = ({
  value,
  onClickDelete,
  onClickCheck,
  checked,
}: ITaskItemProps) => {
  const [showTrash, setShowTrash] = useState(false);
  const [startAnimationOut, setStartAnimationOut] = useState(false);
  const { isMobile } = useWindow();

  const handlers = useSwipeable({
    onSwiped: (eventData) => {
      if (eventData.deltaX >= 64 && eventData.dir === "Right") {
        setStartAnimationOut(false);
        setShowTrash(true);
      } else if (eventData.deltaX <= -64 && eventData.dir === "Left") {
        setStartAnimationOut(true);
        setTimeout(() => {
          setShowTrash(false);
          setStartAnimationOut(false);
        }, 200);
      }
    },
  });

  return (
    <div {...handlers} className={styles.container}>
      {showTrash && isMobile && (
        <div
          className={classNames({
            [styles.trashIn]: showTrash,
            [styles.trashOut]: startAnimationOut,
          })}
        >
          <Button title="♻ Delete" color="red" onClick={onClickDelete} />
        </div>
      )}

      {!isMobile && (
        <div className={styles.trash}>
          <Button title="♻ Delete" color="red" onClick={onClickDelete} />
        </div>
      )}

      <Check title={value} checked={checked} onChange={onClickCheck} />
    </div>
  );
};

export { TaskItem };
