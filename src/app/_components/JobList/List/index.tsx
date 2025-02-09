import React from 'react';
import JobItem from '../JobItem';
import { JobListProps } from './type';
import Grid from '@mui/material/Grid';
import { Box } from '@mui/material';

function List() {
  // const {data} = props;

  return (
    <Box sx={{ paddingBottom: '3rem', paddingTop: '2rem' }}>
      <Grid container gap={3}>
        {Array.from({ length: 3 }).map((_, index) => (
          <Grid key={index} item size={{ xs: 12, md: 6, lg: 4 }}>
            <JobItem />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default List;
