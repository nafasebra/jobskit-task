'use server';

import { Box, Button, Container, Typography } from '@mui/material';
import { searchParamsType } from '@/types/params';
import Navbar from '@/app/_components/Navbar';
import Link from 'next/link';

export default async function PostPage() {
  return (
    <>
      <Navbar />
      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'flex',
            gap: '1rem',
            flexDirection: { xs: 'column-reverse', lg: 'row' },
            alignItems: { xs: 'stretch', lg: 'flex-start' },
            paddingBlock: '1rem',
          }}
        >
        </Box>
      </Container>
    </>
  );
}
