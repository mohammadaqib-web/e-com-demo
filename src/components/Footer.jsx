import {
  Box,
  Container,
  Grid,
  Typography,
  TextField,
  Stack,
} from "@mui/material";
import Logo from "../assets/logo.jpeg";

export default function Footer() {
  return (
    <Box
      sx={{
        position: "relative",
        mt: 8,
        color: "#fff",
        backgroundImage: `url(${Logo})`,
        backgroundSize: "contain",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          backgroundColor: "rgba(0,0,0,0.45)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
        }}
      />

      <Container sx={{ position: "relative", zIndex: 1, py: 6 }}>
        {/* Newsletter */}
        <Stack spacing={2} alignItems="center" sx={{ mb: 6 }}>
          <Typography align="center" sx={{ maxWidth: 700 }}>
            By signing up for alerts, you agree to receive e-mails, calls and
            text messages from RW. To know more how we keep your data safe,
            refer to our Privacy Policy.
          </Typography>

          <TextField
            placeholder="Email address"
            variant="outlined"
            sx={{
              width: { xs: "100%", sm: 420 },
              backgroundColor: "#fff",
              borderRadius: 1,
            }}
          />
        </Stack>

        {/* Footer Links */}
        <Grid container spacing={4} sx={{ justifyContent: "space-between" }}>
          {/* About */}
          <Grid item xs={12} md={4}>
            <Typography variant="h4" gutterBottom>
              About Us
            </Typography>
            <Stack spacing={1}>
              <Typography>Our Story</Typography>
              <Typography>Our Process</Typography>
              <Typography>Press</Typography>
              <Typography>Store Locator</Typography>
            </Stack>
          </Grid>

          {/* Customer Service */}
          <Grid item xs={12} md={4}>
            <Typography variant="h4" gutterBottom>
              Customer Service
            </Typography>
            <Stack spacing={1}>
              <Typography>Privacy Policy</Typography>
              <Typography>Terms of Use</Typography>
              <Typography>Shipping & Returns</Typography>
              <Typography>Contact</Typography>
            </Stack>
          </Grid>

          {/* Contact */}
          <Grid item xs={12} md={4}>
            <Typography variant="h4" gutterBottom>
              Contact Us
            </Typography>
            <Typography>Ballia</Typography>
            <Typography sx={{ mt: 1 }}>+91 9876543210</Typography>
            <Typography sx={{ mt: 1 }}>customercare@rw.com</Typography>
          </Grid>
        </Grid>

        {/* Bottom */}
        <Box
          sx={{
            // borderTop: "1px solid rgba(255,255,255,0.3)",
            mt: 6,
            pt: 2,
            textAlign: "center",
            fontSize: 14,
          }}
        >
          © 2026 RW. All Rights Reserved.
        </Box>
      </Container>
    </Box>
  );
}
