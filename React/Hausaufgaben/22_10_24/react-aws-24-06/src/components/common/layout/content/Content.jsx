import Checkbox from "../../check_box/Checkbox";
import Counter from "../../countbtn/CountBtn";
import Standardbtn from "../../standard_btn/Standardbtn";
import styles from "./Content.module.css";
import check_styles from "../../check_box/Checkbox.module.css";
import MyForm from "../../customTextField/CustomTextfield";

function Content() {
  return (
    <div>
      <Standardbtn title="Home" />
      <Standardbtn title="Crack" className={styles.newbtn} />

      <div className={styles.newcontent}>Hello from Homepage</div>
      <MyForm name={"Stevan labert : "}></MyForm>
      <Counter className={check_styles.submit_btn} />
      <Checkbox />
    </div>
  );
}

export default Content;
