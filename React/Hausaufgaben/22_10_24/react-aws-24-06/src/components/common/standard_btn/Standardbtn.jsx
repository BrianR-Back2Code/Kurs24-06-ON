import styles from "./Standardbtn.module.css";

function Standardbtn({ title, className, msg }) {
  return (
    <button onClick={() => alert({ msg })} className={className}>
      {title}
    </button>
  );
}

export default Standardbtn;
