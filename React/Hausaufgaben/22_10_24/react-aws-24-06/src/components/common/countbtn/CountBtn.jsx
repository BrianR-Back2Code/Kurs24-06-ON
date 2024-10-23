import Standardbtn from "../standard_btn/Standardbtn";
import styles from "../standard_btn/Standardbtn.module.css";

import { useState } from "react";

export default function Counter({ className }) {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <Standardbtn
      title={"Du hast " + { count } + "mal geklickt"}
      onClick={handleClick}
      className={styles.standardbtn}
    ></Standardbtn>
    /* <button className={className} onClick={handleClick}>
      You pressed me {count} times
    </button> */
  );
}
