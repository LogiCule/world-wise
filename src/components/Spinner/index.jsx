import { spinnerContainer, spinner } from "./Spinner.module.css";

function Spinner() {
  return (
    <div className={spinnerContainer}>
      <div className={spinner}></div>
    </div>
  );
}

export default Spinner;
