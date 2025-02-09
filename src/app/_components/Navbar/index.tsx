"use client";

import { AppBar, Toolbar, Button, Box } from "@mui/material";
import { useSession } from "next-auth/react";
import Image from "next/image";

function Navbar() {
  const { data: session } = useSession();

  return (
    <>
      <AppBar
        position="static"
        sx={{ backgroundColor: "secondary.main", padding: 2 }}
      >
        <Toolbar>
          <Box
            component="a"
            href="/"
            sx={{
              flexGrow: 1,
              display: "flex",
              alignItems: "center",
              textDecoration: "none",
            }}
          >
            <Image
              src="/logo.webp"
              width={1000}
              height={0}
              style={{ width: "auto", height: "40px" }}
              alt="logo of jobskit"
            />
          </Box>

          {session?.user ? (
            <Button variant="contained" color="primary">
              داشبورد
            </Button>
          ) : (
            <Button variant="contained" color="primary">
              ورود
            </Button>
          )}
        </Toolbar>
      </AppBar>
    </>
  );
}

Navbar.displayName = "Navbar";

export default Navbar;
