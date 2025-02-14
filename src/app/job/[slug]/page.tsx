'use server';

import { Box, Button, Container, Typography } from '@mui/material';
import { searchParamsType } from '@/types/params';
import Navbar from '../../_components/Navbar';
import JobDescription from './_components/JobDescription';
import JobDetails from './_components/JobDetails';
import Link from 'next/link';

export default async function JobDetailsPage() {
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
          <Box sx={{display: 'flex', justifyContent: 'flex-end'}}>
            <Link href="/">
              <Button sx={{gap: '0.5rem'}}>
                <span>بازگشت</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  style={{
                    width: '1.25rem',
                    height: '1.25rem',
                  }}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 19.5 8.25 12l7.5-7.5"
                  />
                </svg>
              </Button>
            </Link>
          </Box>
          <Typography fontWeight={800} fontSize={'1.3rem'} textAlign={'center'}>Frontend Developer</Typography>
          <JobDescription />
          <JobDetails />
        </Box>
      </Container>
    </>
  );
}
