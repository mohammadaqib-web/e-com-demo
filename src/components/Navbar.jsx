import { useState } from "react";
import {
  AppBar,
  Toolbar,
  Box,
  Typography,
  IconButton,
  Stack,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";

import Logo from "../assets/logo.jpeg";

const menuItems = ["PERFUME", "SHOES", "HIJAB", "MEN", "KIDS"];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <AppBar
        position="sticky"
        elevation={0}
        sx={{ backgroundColor: "rgba(0,0,0,0.9)" }}
      >
        <Toolbar
          sx={{
            maxWidth: "1400px",
            width: "100%",
            mx: "auto",
            justifyContent: "space-between",
          }}
        >
          {/* LEFT - Hamburger (mobile) */}
          <Box sx={{ display: "flex", alignItems: "center", minWidth: 40 }}>
            <IconButton
              sx={{ display: { xs: "flex", md: "none" } }}
              onClick={() => setOpen(true)}
            >
              <MenuIcon sx={{ color: "white" }} />
            </IconButton>

            {/* Logo desktop */}
            <Box sx={{ display: { xs: "none", md: "flex" }, ml: 2 }}>
              <img src={Logo} alt="Logo" style={{ height: 40 }} />
            </Box>
          </Box>

          {/* CENTER - Logo (mobile) / Menu (desktop) */}
          <Box sx={{ flex: 1, mt: 1 }}>
            {/* Mobile logo */}
            <Box sx={{ display: { xs: "block", md: "none" } }}>
              <img src={Logo} alt="Logo" style={{ height: 50 }} />
            </Box>

            {/* Desktop menu */}
            <Stack
              direction="row"
              spacing={4}
              sx={{
                display: { xs: "none", md: "flex" },
                justifyContent: "center",
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
                    color: "white",
                    "&:hover": { opacity: 0.7 },
                  }}
                >
                  {item}
                </Typography>
              ))}
            </Stack>
          </Box>

          {/* RIGHT - Icons */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
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

      {/* MOBILE DRAWER */}
      <Drawer anchor="left" open={open} onClose={() => setOpen(false)}>
        <Box sx={{ width: 200, mt: 2 }}>
          <List>
            {menuItems.map((item) => (
              <ListItem button key={item} onClick={() => setOpen(false)}>
                <ListItemText primary={item} />
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
}
