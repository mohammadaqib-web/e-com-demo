import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ProductsGrid from "./components/ProductsGrid";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import "./App.css";
import { Box } from "@mui/material";

export default function App() {
  return (
    <>
      <Navbar />
      <Container sx={{ my: 3 }}>
        <Typography variant="h4" gutterBottom>
          Men’s Collection
        </Typography>
        <Box sx={{ ml: 0 }}>
          <ProductsGrid />
        </Box>
      </Container>
      <Footer />
    </>
  );
}
