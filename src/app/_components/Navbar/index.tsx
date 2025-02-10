'use client';

import { AppBar, Toolbar, Button, Box } from '@mui/material';
import { useSession } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';

function Navbar() {
  const { data: session } = useSession();

  return (
    <>
      <AppBar
        position="static"
        sx={{ backgroundColor: 'secondary.main', padding: 2 }}
      >
        <Toolbar>
          <Box
            component="a"
            href="/"
            sx={{
              flexGrow: 1,
              display: 'flex',
              alignItems: 'center',
              textDecoration: 'none',
            }}
          >
            <Image
              src="/logo.webp"
              width={1000}
              height={0}
              style={{ width: 'auto', height: '40px' }}
              alt="logo of jobskit"
            />
          </Box>

          {session?.user ? (
            <Link href="/dashboard">
              <Button variant="contained" color="primary">
                داشبورد
              </Button>
            </Link>
          ) : (
            <Link href="/">
              <Button variant="contained" color="primary">
                ورود
              </Button>
            </Link>
          )}
        </Toolbar>
      </AppBar>
    </>
  );
}

Navbar.displayName = 'Navbar';

export default Navbar;
