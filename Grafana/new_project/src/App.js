import "./App.css";
import Counter from "./Counter";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  return (
    <>
      <ToastContainer />
      <Counter />
    </>
  );
}

export default App;
