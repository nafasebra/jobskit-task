import { Box, CircularProgress } from '@mui/material';
import React from 'react';

function Loading() {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '300px',
      }}
    >
      <CircularProgress />
    </Box>
  );
}

export default Loading;
