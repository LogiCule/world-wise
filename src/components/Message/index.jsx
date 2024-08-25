import { message } from "./Message.module.css";
import Proptypes from "prop-types";

function Message({ msg }) {
  return (
    <p className={message}>
      <span role="img">👋</span> {msg}
    </p>
  );
}

Message.propTypes = { msg: Proptypes.string };

export default Message;
