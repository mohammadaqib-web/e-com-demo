import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
} from "@mui/material";

export default function ProductCard({ product }) {
  return (
    <Card>
      <CardMedia
        component="img"
        image={product.image}
        alt={product.title}
        width={"200px"}
      />
      <CardContent>
        <Typography variant="subtitle1">{product.title}</Typography>
        <Typography color="text.secondary">{product.price}</Typography>
      </CardContent>
      <CardActions sx={{ mt: -1, mb: 1 }}>
        <Button variant="contained" fullWidth>
          Add to Cart
        </Button>
      </CardActions>
    </Card>
  );
}
