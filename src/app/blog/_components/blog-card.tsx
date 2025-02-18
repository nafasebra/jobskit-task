import React from 'react'
import { Grid, Paper, Card, Box, Avatar, Typography, Link, Button, Stack } from '@mui/material';
import Image from 'next/image';


function BlogCard() {
  return (
    <Paper elevation={0} sx={{ position: 'relative', backgroundColor: 'secondary.main', borderRadius: '1rem' }}>
      <Box>
        {/* Avatar */}
        <Avatar
          alt="فاطمه خدادادی"
          src="https://jobs-kit.com/api/file/download/96404"
          sx={{
            position: 'absolute',
            top: '230px',
            right: '2rem',
            zIndex: 30
          }}
        />

        {/* Image */}
        <Box
          component="span"
          sx={{ width: '100%', height: '250px', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}
        >
          <Box
            sx={{ width: '100%', height: '250px', position: 'relative', overflow: 'hidden' }}
          >
            <Image
              alt="روش های مهاجرت کاری در 2025"
              src="https://jobs-kit.com/api/file/download/170791"
              fill
              style={{overflow: 'hidden'}}
            />
          </Box>
        </Box>
      </Box>

      {/* Content */}
      <Box sx={{ padding: '3rem 1rem 1rem' }}>
        <Typography variant="caption" sx={{ color: 'white' }}>
          06 Feb 2025
        </Typography>

        <Link
          href="/blog/work-migration-methods-2025"
          underline="hover"
          className="rtl-rak6dn"
        >
          <Typography variant="subtitle2">
            روش های مهاجرت کاری در 2025
          </Typography>
        </Link>

        <Box sx={{ direction: 'ltr' }}>
          <Stack direction="row">
            {/* Views */}
            <Stack direction="row" sx={{ color: 'white', alignItems: 'center' }}>
              <Button
                variant="text"
                color="inherit"
                disableElevation
                className="rtl-1u7m0n8"
                aria-label="اشتراک‌گذاری پست"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24px"
                  height="24px"
                  viewBox="0 0 24 24"
                >
                  <path fill="currentColor" d="M9.75 12a2.25 2.25 0 1 1 4.5 0a2.25 2.25 0 0 1-4.5 0" />
                  <path fill="currentColor" fillRule="evenodd" d="M2 12c0 1.64.425 2.191 1.275 3.296C4.972 17.5 7.818 20 12 20s7.028-2.5 8.725-4.704C21.575 14.192 22 13.639 22 12c0-1.64-.425-2.191-1.275-3.296C19.028 6.5 16.182 4 12 4S4.972 6.5 3.275 8.704C2.425 9.81 2 10.361 2 12m10-3.75a3.75 3.75 0 1 0 0 7.5a3.75 3.75 0 0 0 0-7.5" clipRule="evenodd" />
                </svg>
              </Button>

              <Typography variant="body1" className="rtl-1nsx3a9">0</Typography>
            </Stack>

            {/* Share */}
            <Stack direction="row" sx={{ color: 'white', alignItems: 'center' }}>
              <Button
                variant="text"
                color="inherit"
                disableElevation
                className="rtl-1u7m0n8"
                aria-label="اشتراک‌گذاری پست"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24px"
                  height="24px"
                  viewBox="0 0 24 24"
                >
                  <path fill="currentColor" fillRule="evenodd" d="M13.803 5.333c0-1.84 1.5-3.333 3.348-3.333A3.34 3.34 0 0 1 20.5 5.333c0 1.841-1.5 3.334-3.349 3.334a3.35 3.35 0 0 1-2.384-.994l-4.635 3.156a3.34 3.34 0 0 1-.182 1.917l5.082 3.34a3.35 3.35 0 0 1 2.12-.753a3.34 3.34 0 0 1 3.348 3.334C20.5 20.507 19 22 17.151 22a3.34 3.34 0 0 1-3.348-3.333a3.3 3.3 0 0 1 .289-1.356L9.05 14a3.35 3.35 0 0 1-2.202.821A3.34 3.34 0 0 1 3.5 11.487a3.34 3.34 0 0 1 3.348-3.333c1.064 0 2.01.493 2.623 1.261l4.493-3.059a3.3 3.3 0 0 1-.161-1.023" clipRule="evenodd" />
                </svg>
              </Button>
              <Typography variant="body1" className="rtl-1nsx3a9">0</Typography>
            </Stack>
          </Stack>
        </Box>
      </Box>
    </Paper>
  )
}

export default BlogCard