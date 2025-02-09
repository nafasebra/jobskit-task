import { Box, Container } from '@mui/material';
import React from 'react';
import SearchForm from './SearchForm';
import List from './List';

function JobListContainer() {
  return (
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
        <List />
      </Box>
    </Container>
  );
}

export default JobListContainer;
