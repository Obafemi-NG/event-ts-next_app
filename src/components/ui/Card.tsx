import { FC } from "react";
import classes from "./Card.module.css";

type Props = {
  children: React.ReactNode;
};

const Card: FC<Props> = ({ children }) => {
  return <div className={classes.card}>{children}</div>;
};

export default Card;
