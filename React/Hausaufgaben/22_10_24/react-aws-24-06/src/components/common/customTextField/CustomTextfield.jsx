import { useState } from "react";
import Standardbtn from "../standard_btn/Standardbtn";
import styles from "./CustomTextfield.module.css";
/*
Anschließend an die Aufgabe von gestern legt eine eigene Komponente an (z.B. ein CustomTextField), welche Props entgegen nehmen kann und diese verendet.
Die Komponente soll schließlich auf eurer Webseite eingebunden werden

name = name des Labels
*/
function MyForm({ name }) {
  const [title, settitle] = useState(
    "Bitte hier Text eintragen , wurde zum testen befüllt und ist eigl. leer"
  );
  return (
    <div className={styles.textbox}>
      <label>
        {name}
        <textarea
          required
          value={title}
          onChange={(e) => settitle(e.target.value)}
        >
          {title}
        </textarea>
        <Standardbtn
          title={"Senden"}
          className={styles.sendbtn}
          msg={"Abgeschickt!"}
        />
      </label>
      <p>{title}</p>
    </div>
  );
}

export default MyForm;
