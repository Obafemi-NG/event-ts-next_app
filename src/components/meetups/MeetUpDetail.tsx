import React, { FC } from "react";
import styles from "./MeetUpDetail.module.css";

type Props = {
  image: string;
  title: string;
  address: string;
  id: string;
  description: string;
};

const MeetUpDetail: FC<Props> = ({ ...props }: Props) => {
  return (
    <section className={styles.details}>
      <img src={props.image} alt={props.title} />
      <div className={styles.content}>
        <h3 className={styles.title}> {props.title} </h3>
        <p className={styles.address}> {props.address} </p>
        <p className={styles.description}> {props.description} </p>
      </div>
    </section>
  );
};

export default MeetUpDetail;
