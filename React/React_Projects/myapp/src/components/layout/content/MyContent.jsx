import { Button, Container, Typography } from "@mui/material";

function MyContent() {
  return (
    <Container sx={{ bgcolor: "grey", height: "100vh" }}>
      <Typography variant="h1">Hallo hier ist ein Random text</Typography>
      <Button
        sx={{ bgcolor: "red" }}
        variant="contained"
        onClick={() => alert("Crackhead")}
      >
        Hallo
      </Button>
    </Container>
  );
}

export default MyContent;
