import { Button, Container, Typography } from "@mui/material";

function MyContent() {
  return (
    <Container sx={{ bgcolor: "grey", height: "100vh" }}>
      <Button variant="contained" disabled onClick={() => alert("Crackhead")}>
        Hallo
      </Button>
    </Container>
  );
}

export default MyContent;
