import MainNavigation from "./MainNavigation";
import classes from "./Layout.module.css";
import { FC } from "react";

type Props = {
  children: React.ReactNode;
};

const Layout: FC<Props> = ({ children }) => {
  return (
    <div>
      <MainNavigation />
      <main className={classes.main}>{children}</main>
    </div>
  );
};

export default Layout;
