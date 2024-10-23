import Checkbox from "../../common/check_box/Checkbox";
import Counter from "../../common/countbtn/CountBtn";
import Standardbtn from "../../common/standard_btn/Standardbtn";
import styles from "./Content.module.css";
import check_styles from "../../common/check_box/Checkbox.module.css";
import MyForm from "../../common/customTextField/CustomTextfield";

function Content() {
  return (
    <div>
      <Standardbtn title="Home" />
      <Standardbtn title="Crack" />

      <div className={styles.newcontent}>Hello from Homepage</div>
      <MyForm name={"Textbox : "}></MyForm>
      <Counter className={check_styles.submit_btn} />
      <Checkbox></Checkbox>
    </div>
  );
}

export default Content;
