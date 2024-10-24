import "./App.css";
import Content from "./components/common/layout/content/Content";
import Footer from "./components/common/layout/footer/Footer";
import MyNavbar from "./components/common/layout/navbar/Navbar";

function App() {
  return (
    <div className="main-container">
      <MyNavbar />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
