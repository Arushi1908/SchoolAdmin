import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Button,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Box,
  Divider,
  Container,
} from "@mui/material";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  return (
    <AppBar
      position="fixed"
      color="default"
      elevation={0}
      sx={{
        background: "#abd9f1",
        height: "64px",
        justifyContent: "center",
      }}
    >
      <Container sx={{paddingLeft:0}} maxWidth="lg">
        <Toolbar
          disableGutters
          sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}
        >
          <Logo />
          <Box sx={{ display: { xs: "none", lg: "flex" }, alignItems: "center", gap: 2 }}>
            <Links />
            {/* <CTAs /> */}
          </Box>
          <Box sx={{ display: { xs: "flex", lg: "none" }, alignItems: "center" }}>
            <MobileMenu />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

const Logo = () => (
  <Box sx={{ display: "flex", alignItems: "center", color: "#122C4F", fontWeight: 700, fontSize: "1.2rem" }}>
    EDVORA
  </Box>
);

const LINKS = [
  { text: "Home", href: "/" },
  { text: "About Us", href: "/#about-us" },
  { text: "Contact Us", href: "/contact" },
];

const Links = () => (
  <>
    {LINKS.map((link) => (
      <Button
        key={link.text}
        href={link.href}
        variant="text"
        sx={{
          color: "#122C4F",
          backgroundColor: "transparent",
          "&:hover": {
            backgroundColor: "#122C4F",
            color: "#abd9f1",
          },
        }}
      >
        {link.text}
      </Button>
    ))}
  </>
);

// const CTAs = () => (
//   <Button
//     variant="contained"
//     sx={{
//       bgcolor: "#122C4F",
//       color: "#abd9f1",
//       "&:hover": {
//         bgcolor: "#0f223d",
//       },
//     }}
//   >
//     Schedule a Demo
//   </Button>
// );

const MobileMenu = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <IconButton onClick={() => setOpen(true)} sx={{ color: "#122C4F" }}>
        <FiMenu size={24} />
      </IconButton>
      <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
        <Box sx={{ width: 250 }} role="presentation">
          <Box display="flex" justifyContent="space-between" alignItems="center" p={2}>
            <Logo />
            <IconButton onClick={() => setOpen(false)}>
              <FiX />
            </IconButton>
          </Box>
          <Divider />
          <List>
            {LINKS.map((link) => (
              <ListItem
                button
                key={link.text}
                component="a"
                href={link.href}
                onClick={() => setOpen(false)}
              >
                <ListItemText primary={link.text} />
              </ListItem>
            ))}
          </List>
          <Divider />
          <Box p={2}>
            {/* <CTAs /> */}
          </Box>
        </Box>
      </Drawer>
    </>
  );
};

export default Navbar;
