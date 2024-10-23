import Standardbtn from "../standard_btn/Standardbtn";
import styles from "./Checkbox.module.css";

function Checkbox() {
  return (
    <ul className={styles.check}>
      <li>
        <input type="text" />
        <input type="checkbox" name="" id="" />
      </li>
      <li>
        <input type="text" />
        <input type="checkbox" name="" id="" />
      </li>
      <li>
        <input type="text" />
        <input type="checkbox" name="" id="" />
      </li>
      <Standardbtn className={styles.submit_btn} title={"Submit"} />
    </ul>
  );
}

export default Checkbox;
