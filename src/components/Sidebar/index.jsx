import { Outlet } from "react-router-dom";
import AppNav from "../AppNav";
import Footer from "../Footer";
import Logo from "../Logo";
import { sidebar } from "./Sidebar.module.css";

const Sidebar = () => {
  return (
    <div className={sidebar}>
      <Logo />
      <AppNav />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Sidebar;
