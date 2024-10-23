import styles from "./Standardbtn.module.css";

function Standardbtn({ title, className }) {
  return (
    <button onClick={() => alert("Hallo von Home")} className={className}>
      {title}
    </button>
  );
}

export default Standardbtn;
