import Grid from "@mui/material/Grid";
import ProductCard from "./ProductCard";
import products from "../data/menProducts.json";

export default function ProductsGrid() {
  return (
    <Grid container rowSpacing={6} columnSpacing={3} sx={{ p: 3 }}>
      {products.map((p) => (
        <Grid item xs={12} sm={6} md={4} lg={3} key={p.id}>
          <ProductCard product={p} />
        </Grid>
      ))}
    </Grid>
  );
}
