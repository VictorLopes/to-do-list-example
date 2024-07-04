import { InsertBar, TaskList } from "@organisms/index";
import styles from "./App.module.scss";
import { DataContextProvider } from "@providers/data";
import { useLocalStorage } from "@hooks/useLocalStorage";

const App = () => {
  const localStorage = useLocalStorage();
  return (
    <DataContextProvider value={localStorage}>
      <div className={styles.container}>
        <InsertBar />
        <TaskList />
      </div>
    </DataContextProvider>
  );
};

export { App };
