'use server'

import Navbar from '@/app/_components/Navbar';
import Header from '@/app/_components/Header';
import { Box, Container, Grid } from '@mui/material';
import { searchParamsType } from '@/types/params';
import BlogCard from './_components/blog-card';

export default async function Blog({ searchParams }: { searchParams: searchParamsType }) {
  return (
    <>
      <Navbar />
      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 6,
            paddingTop: '3rem'
          }}
        >
          <Grid container spacing={3} sx={{ margin: 0, width: '100%' }}>
            {Array.from({ length: 3 }).map((_, index) => (
              <Grid
                key={index}
                item
                xs={12}
                sm={6}
                md={4}
                sx={{
                  padding: '12px !important',
                }}
              >
                <BlogCard />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </>
  );
}
