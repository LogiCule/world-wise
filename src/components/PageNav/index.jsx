import styles from "./PageNav.module.css";
import { Link } from "react-router-dom";

const PageNav = () => {
  return (
    <nav className={styles.message}>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/pricing">Pricing</Link>
        </li>
        <li>
          <Link to="/product">Product</Link>
        </li>
      </ul>
    </nav>
  );
};

export default PageNav;
