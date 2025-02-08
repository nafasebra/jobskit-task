"use client";

import { Box } from "@mui/material";
import React from "react";
import { DashboardContainerProps } from "./type";
import Sidebar from "../Sidebar";
import DashboardNavbar from "../Navbar";

function DashboardContainer({ children }: DashboardContainerProps) {
  return (
    <Box component={"main"} sx={{ display: 'flex',width: "100%" }}>
      <Sidebar />
      <Box component={"section"} sx={{width: '100%'}}>
        <DashboardNavbar />
        <Box sx={{ padding: "1.5rem" }}>{children}</Box>
      </Box>
    </Box>
  );
}
export default DashboardContainer;
