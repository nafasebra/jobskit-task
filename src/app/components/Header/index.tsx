"use client";

import { Box, Container, Typography } from "@mui/material";
import React from "react";

function Header() {
  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 3,
          paddingY: 10,
        }}
      >
        <Typography variant="h3" fontWeight={800}>
          مسیر موفقیت شغلی از اینجا آغاز می‌شود
        </Typography>
        <Typography variant="h5" sx={{ color: "secondary.light" }}>
          جست و جوی فرصت های شغلی
        </Typography>
      </Box>
    </Container>
  );
}

export default Header;
