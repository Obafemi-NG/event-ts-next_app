import { FC } from "react";
import Card from "../ui/Card";
import classes from "./MeetUpItem.module.css";
import { useRouter } from "next/router";

type Props = {
  image: string;
  title: string;
  address: string;
  id: string;
  key: string;
};

const MeetUpItem: FC<Props> = ({ ...props }: Props) => {
  const route = useRouter();
  const handleRoute = (e: React.MouseEvent) => {
    e.preventDefault();
    route.push(`/${props.id}`);
  };
  return (
    <li key={props.key} className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={props.image} alt={props.title} />
        </div>
        <div className={classes.content}>
          <h3>{props.title}</h3>
          <address>{props.address}</address>
        </div>
        <div className={classes.actions}>
          <button onClick={handleRoute}>Show Details</button>
        </div>
      </Card>
    </li>
  );
};

export default MeetUpItem;
