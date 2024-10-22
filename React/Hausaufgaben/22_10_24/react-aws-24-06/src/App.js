import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/layout/navbar/Navbar";
import Content from "./components/layout/content/Content";
import Footer from "./components/layout/footer/Footer";

function App() {
  return (
    <div className="main-container">
      <Navbar />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
