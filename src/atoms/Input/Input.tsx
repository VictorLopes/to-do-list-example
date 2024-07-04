import styles from "./Input.module.scss";

interface IInputProps
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {}

const Input = (props: IInputProps) => {
  return <input {...props} className={styles.input} />;
};

export { Input };
