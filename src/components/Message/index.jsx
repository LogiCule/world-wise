import styles from "./Message.module.css";
import Proptypes from "prop-types";

function Message({ message }) {
  return (
    <p className={styles.message}>
      <span role="img">👋</span> {message}
    </p>
  );
}

Message.propTypes = { message: Proptypes.string };

export default Message;
