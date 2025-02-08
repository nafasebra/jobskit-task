"use client";

import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import React, { useState } from "react";
import useStore from "@/store/index";

function DashboardNavbar() {
  const { isMenuOpen, setMenuOpen } = useStore();

  return (
    <>
      <AppBar
        position="fixed"
        sx={{ width: { sm: `calc(100% - 240px)` }, mr: { sm: "240px" }, backgroundColor: 'secondary.main', color: 'white' }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            edge="start"
            sx={{ mr: 2, display: { sm: "none" } }}
            onClick={() => setMenuOpen(true)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default DashboardNavbar;
