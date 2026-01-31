import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
  Box,
} from "@mui/material";

export default function ProductCard({ product }) {
  return (
    <Card sx={{ width: "100%", maxWidth: 360, mt: 1 }}>
      <Box sx={{ overflow: "hidden" }}>
        <CardMedia
          component="img"
          image={product.image}
          alt={product.title}
          sx={{
            aspectRatio: "3 / 4",
            minWidth: { xs: "300px", md: "250px" },
            maxWidth: { xs: "300px", md: "250px" },
          }}
        />
      </Box>

      <CardContent>
        <Typography variant="subtitle1">{product.title}</Typography>
        <Typography color="text.secondary">{product.price}</Typography>
      </CardContent>

      <CardActions sx={{ px: 2, pb: 2 }}>
        <Button variant="contained" fullWidth>
          Add to Cart
        </Button>
      </CardActions>
    </Card>
  );
}
