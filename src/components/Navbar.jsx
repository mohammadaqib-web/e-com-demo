import {
  AppBar,
  Toolbar,
  Box,
  Typography,
  IconButton,
  Stack,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import Logo from "../assets/logo.jpeg";

const menuItems = ["PERFUME", "SHOES", "HIJAB", "MEN", "KIDS"];

export default function Navbar() {
  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{
        backgroundColor: "rgba(0,0,0,0.9)",
        // backgroundColor: "#fff",
        // borderBottom: "1px solid #eee",
        // color: "#fff",
      }}
    >
      <Toolbar
        sx={{
          maxWidth: "1400px",
          width: "100%",
          mx: "auto",
          justifyContent: "space-between",
        }}
      >
        {/* LEFT - LOGO */}
        <Box sx={{ display: "flex", alignItems: "center", minWidth: 160 }}>
          <img src={Logo} alt="Logo" style={{ height: 40 }} />
        </Box>

        {/* CENTER - MENU */}
        <Stack
          direction="row"
          spacing={4}
          sx={{
            display: { xs: "none", md: "flex" },
            alignItems: "center",
          }}
        >
          {menuItems.map((item) => (
            <Typography
              key={item}
              sx={{
                fontSize: "14px",
                fontWeight: 500,
                letterSpacing: "0.8px",
                cursor: "pointer",
                "&:hover": { opacity: 0.7 },
              }}
            >
              {item}
            </Typography>
          ))}
        </Stack>

        {/* RIGHT - ICONS */}
        <Box
          sx={{ display: "flex", alignItems: "center", gap: 1 }}
        >
          <IconButton>
            <SearchIcon sx={{ color: "white" }} />
          </IconButton>
          <IconButton>
            <PersonOutlineIcon sx={{ color: "white" }} />
          </IconButton>
          <IconButton>
            <ShoppingBagOutlinedIcon sx={{ color: "white" }} />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
