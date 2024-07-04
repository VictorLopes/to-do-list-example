import classNames from "classnames";
import styles from "./button.module.scss";

interface IButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  title: string;
  color?: "default" | "red";
}

const Button = ({ title, color, ...rest }: IButtonProps) => {
  return (
    <button
      {...rest}
      className={classNames({
        [styles.button]: true,
        [styles.buttonRed]: color === "red",
      })}
    >
      {title}
    </button>
  );
};

export { Button };
