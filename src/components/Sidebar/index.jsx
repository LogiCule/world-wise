import AppNav from "../AppNav";
import Logo from "../Logo";
import { sidebar, footer, copyright } from "./Sidebar.module.css";

const Sidebar = () => {
  return (
    <div className={sidebar}>
      <Logo />
      <AppNav />
      <p>List of cities</p>
      <footer className={footer}>
        <p className={copyright}>&copy; Copyright {new Date().getFullYear()}</p>
      </footer>
    </div>
  );
};

export default Sidebar;
