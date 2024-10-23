import Checkbox from "../../common/check_box/Checkbox";
import Counter from "../../common/countbtn/CountBtn";
import Standardbtn from "../../common/standard_btn/Standardbtn";
import styles from "./Content.module.css";
import check_styles from "../../common/check_box/Checkbox.module.css";

function Content() {
  return (
    <div>
      <Standardbtn title="Home" />
      <Standardbtn title="Crack" />

      <div className={styles.newcontent}>Hello from Homepage</div>
      <Checkbox />
      <Counter className={check_styles.submit_btn} />
    </div>
  );
}

export default Content;
