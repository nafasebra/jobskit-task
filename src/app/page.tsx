'use server'

import Navbar from './_components/Navbar';
import Header from './_components/Header';
import { Box, Container } from '@mui/material';
import SearchForm from './_components/JobList/SearchForm';
import List from './_components/JobList/List';
import { searchParamsType } from '@/types/params';

export default async function Home({ searchParams }: {searchParams: searchParamsType}) {
  return (
    <>
      <Navbar />
      <Header />
      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 6,
          }}
        >
          <Container maxWidth="md">
            <SearchForm />
          </Container>
          <List searchParams={searchParams} />
        </Box>
      </Container>
    </>
  );
}
