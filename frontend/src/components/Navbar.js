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
} from "@mui/material";
import { FiMenu, FiArrowRight, FiX, FiChevronDown } from "react-icons/fi";
import { FaUserCircle } from "react-icons/fa";
import Image from "mui-image";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  return (
    <AppBar position="fixed" color="default" elevation={0} sx={{ background: ' #abd9f1', height: '8.5vh', }}>
      <Toolbar sx={{ justifyContent: "space-between", pb:3 }}>
        <Logo />
        <Box sx={{ display: { xs: "none", lg: "flex" }, gap: 2, pb:1.3 }}>
          <Links />
          <CTAs />
        </Box>
        <Box sx={{ display: { xs: "block", lg: "none" } }}>
          <MobileMenu />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

const Logo = () => (
  <Box sx={{ display: "flex", alignItems: "center", gap: 1, pb:1.3, color: ' #122C4F' }}>
    {/* <Image
      src="https://mycareseva.org/wp-content/uploads/2023/11/MicrosoftTeams-image-146.png"
      alt="MyCareSeva Logo"
      width={120}
      height={50}
    /> */}
    <div>EDVORA</div>
  </Box>
);

const LINKS = [
  {
    text: "Home",
    href: "/",
  },
  {
    text: "About Us",
    href: "/about",
  },
  {
    text: "Contact Us",
    href: "/contact",
  },
];

const Links = () => (
  <>
    {LINKS.map((link) => (
      <Button key={link.text} href={link.href} variant="text" sx={{color: ' #122C4F', backgroundColor: 'transparent', '&:hover': { backgroundColor:' #122C4F', color:' #abd9f1'}}}>
        {link.text}
      </Button>
    ))}
  </>
);

const CTAs = () => (
  <Box sx={{ display: "flex", gap: 1 }}>
    <Button variant="contained" sx={{bgcolor: ' #122C4F', color: ' #abd9f1'}}>
      Schedule a Demo
    </Button>
  </Box>
);

const MobileMenu = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <IconButton onClick={() => setOpen(true)}>
        <FiMenu />
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
              <ListItem button key={link.text} component="a" href={link.href} onClick={() => setOpen(false)}>
                <ListItemText primary={link.text} />
              </ListItem>
            ))}
          </List>
          <Divider />
          <Box p={2}>
            <CTAs />
          </Box>
        </Box>
      </Drawer>
    </>
  );
};

export default Navbar;