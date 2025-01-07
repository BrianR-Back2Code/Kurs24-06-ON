import { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const logger = require("./logger.js");

function Counter() {
  // Definieren des Zählerwertes und einer Funktion zum Aktualisieren des Zählers
  const [count, setCount] = useState(0);

  // Funktion zum Inkrementieren des Zählers
  let incrementCount = () => {
    console.log("Inkrementiere Zähler");
    setCount(count + 1);
    logger.info(`Zähler wurde auf ${count + 1} erhöht.`);
  };

  // Funktion zum Dekrementieren des Zählers
  let decrementCount = () => {
    console.log("Versuche, Zähler zu dekrementieren");
    console.log(`Aktueller Zählerwert: ${count}`);
    // Überprüfen, ob der Zählerwert 0 ist, um negatives Zählen zu verhindern
    if (count === 0) {
      console.error(
        "Zählerwert ist bereits 0. Decrementieren ist nicht möglich."
      );
      logger.error(
        "Zählerwert ist bereits 0. Decrementieren ist nicht möglich."
      );
      toast.error("Zählerwert ist bereits 0", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      return;
    }
    setCount(count - 1);
    logger.info(`Zähler wurde auf ${count - 1} verringert.`);
  };

  // Rendern der Komponente
  return (
    <div className="app">
      <div>
        {/* Anzeige des Zählerwerts */}
        <div className="count">
          <h1 data-testid="counter-text">Count: {count}</h1>
        </div>
        {/* Buttons zum Inkrementieren und Dekrementieren des Zählers */}
        <div className="buttons">
          <button data-testid="decrease" title={"-"} onClick={decrementCount}>
            -
          </button>
          <button data-testid="increase" title={"+"} onClick={incrementCount}>
            +
          </button>
        </div>
      </div>
    </div>
  );
}

export default Counter;
