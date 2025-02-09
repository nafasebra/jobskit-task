"use client";

import { AppBar, Box, IconButton, Toolbar, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import React, { useState } from "react";
import useStore from "@/store/index";
import ProfileDropdown from "./profile-dropdown";

function DashboardNavbar() {
  const { isMenuOpen, setMenuOpen } = useStore();

  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          width: { sm: isMenuOpen ? `calc(100% - 240px)` : "100%" }, // Adjust width based on sidebar state
          ml: { sm: isMenuOpen ? "240px" : 0 }, // Adjust margin based on sidebar state
          backgroundColor: "secondary.main",
          color: "white",
          transition: "width 0.3s, margin 0.3s", // Smooth transition
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            edge="start"
            sx={{ mr: 2, display: { sm: "none" } }} // Show only on small screens
            onClick={() => setMenuOpen(!isMenuOpen)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Dashboard
          </Typography>
          <Box sx={{ flexGrow: 1 }} />
          <ProfileDropdown />
        </Toolbar>
      </AppBar>
    </>
  );
}

export default DashboardNavbar;
