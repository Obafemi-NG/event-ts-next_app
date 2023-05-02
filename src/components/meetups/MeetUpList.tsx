import MeetUp from "@/models/MeetUp";
import MeetUpItem from "./MeetUpItem";
import classes from "./MeetUpList.module.css";
import { FC } from "react";

type Props = {
  meetups: MeetUp[];
};

const MeetupList: FC<Props> = ({ ...props }) => {
  return (
    <ul className={classes.list}>
      {props.meetups.map((meetup) => (
        <MeetUpItem
          key={meetup.id}
          id={meetup.id}
          image={meetup.image}
          title={meetup.title}
          address={meetup.address}
        />
      ))}
    </ul>
  );
};

export default MeetupList;
