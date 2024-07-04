import styles from "./Card.module.scss";

interface ICardProps {
  children: React.ReactElement | React.ReactElement[];
}

const Card = ({ children, ...rest }: ICardProps) => {
  return (
    <div {...rest} className={styles.card}>
      {children}
    </div>
  );
};

export { Card };
