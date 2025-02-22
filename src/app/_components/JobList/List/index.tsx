'use server';

import React, { Suspense } from 'react';
import JobItem from '../JobItem';
import { Box, Grid, Pagination } from '@mui/material';
import Loading from '@/components/loading';
import { searchParamsType } from '@/types/params';
import PaginationJobs from '../Pagination';

async function fetchData(page: string = '1', title: string = "") {
  const response = await fetch(
    `https://jobs-kit.com/api/job/all?title=${title || ""}&page=${page || "1"}`,
    {
      cache: 'no-store',
    }
  );

  if (!response.ok) {
    throw new Error('Failed to fetch data');
  }

  return response.json();
}

export default async function List({
  searchParams,
}: {
  searchParams: searchParamsType;
}) {
  const data = await fetchData(searchParams?.page, searchParams?.title);

  return (
    <Suspense fallback={<Loading />}>
      <Box
        sx={{
          paddingBottom: '2rem',
          paddingTop: '2rem',
          overflow: 'hidden',
        }}
      >
        <Grid container spacing={3} sx={{ margin: 0, width: '100%' }}>
          {data.data.map((item: any) => (
            <Grid
              key={item.id}
              item
              xs={12}
              sm={6}
              md={4}
              sx={{
                padding: '12px !important',
              }}
            >
              <JobItem data={item} />
            </Grid>
          ))}
        </Grid>
      </Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          paddingBottom: '5rem',
          direction: 'ltr',
        }}
      >
        <PaginationJobs />
      </Box>
    </Suspense>
  );
}
