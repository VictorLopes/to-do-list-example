import styles from "./Check.module.scss";

interface ICheckProps
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  title: string;
}

const Check = ({ title, ...rest }: ICheckProps) => {
  return (
    <>
      <label className={styles.check}>
        <div className={styles.title}>{title}</div>
        <input {...rest} type="checkbox" />
        <span className={styles.wrapper} />
      </label>
    </>
  );
};

export { Check };
