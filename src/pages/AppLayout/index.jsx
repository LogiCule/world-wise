import { app } from "./AppLayout.module.css";

import { Map, Sidebar } from "../../components";

const AppLayout = () => {
  return (
    <div className={app}>
      <Sidebar />
      <Map />
    </div>
  );
};

export default AppLayout;
