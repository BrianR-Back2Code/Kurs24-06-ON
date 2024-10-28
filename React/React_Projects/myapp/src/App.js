import "bootstrap/dist/css/bootstrap.min.css";
import MyContent from "./components/layout/content/MyContent";
import MyNavbar from "./components/layout/navbar/MyNavbar";
import { Box } from "@mui/material";

function App() {
  return (
    <Box sx={{ display: "flex" }}>
      <MyNavbar />
      <MyContent />
      <MyContent />
    </Box>
  );
}

export default App;
