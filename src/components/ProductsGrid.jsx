import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import ProductCard from "./ProductCard";
import products from "../data/menProducts.json";

export default function ProductsGrid() {
  return (
    <Box sx={{ px: { xs: 1, sm: 2 }, width: "100p%" }}>
      <Grid
        container
        rowSpacing={{ xs: 3, sm: 5 }}
        columnSpacing={{ xs: 2, sm: 3 }}
      >
        {products.map((p) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            lg={3}
            key={p.id}
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <ProductCard product={p} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
