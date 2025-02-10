'use client';

import { Box } from '@mui/material';
import React, { useEffect } from 'react';
import { DashboardContainerProps } from './type';
import Sidebar from '../Sidebar';
import DashboardNavbar from '../Navbar';

function DashboardContainer({ children }: DashboardContainerProps) {
  return (
    <Box component={'main'} sx={{ display: 'flex', width: '100%' }}>
      <Sidebar />
      <Box component={'section'} sx={{ width: '100%' }}>
        <DashboardNavbar />
        <Box sx={{ padding: '1.5rem', mt: '4rem' }}>{children}</Box>
      </Box>
    </Box>
  );
}
export default DashboardContainer;
