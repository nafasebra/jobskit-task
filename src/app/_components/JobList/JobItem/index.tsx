import React from 'react';

import {
  Card,
  Stack,
  Button,
  Avatar,
  ListItemText,
  Typography,
  Divider,
} from '@mui/material';
import ShareIcon from '@mui/icons-material/Share';
import WorkIcon from '@mui/icons-material/Work';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import FlagIcon from '@mui/icons-material/Flag';
import { JobItemProps } from './type';

function JobItem({ data }: JobItemProps) {
  return (
    <Card
      sx={{
        backgroundColor: 'secondary.main',
        color: 'white',
        direction: 'ltr',
        width: '100%', // Ensure the card takes full width of the grid item
        height: '100%', // Ensure consistent height
      }}
    >
      <Stack
        direction="row"
        justifyContent="flex-end"
        sx={{ position: 'relative' }}
      >
        <Button
          aria-label="اشتراک‌گذاری"
          sx={{ position: 'absolute', minWidth: 'auto' }}
        >
          <ShareIcon sx={{ fontSize: '1rem', color: 'secondary.light' }} />
        </Button>
      </Stack>

      <Stack direction="row" spacing={2} alignItems="center" sx={{ p: 2 }}>
        <Avatar
          src={data?.company.imageURL}
          alt={data?.company.name}
          sx={{ borderRadius: '12px' }}
        />
        <ListItemText
          primary={
            <Stack>
              <Typography
                variant="body1"
                component="a"
                // href="/job/418460/"
                sx={{ textDecoration: 'none', color: 'white' }}
              >
                {data?.title}
              </Typography>
              <Typography
                variant="body2"
                component="a"
                // href="/job/company/20729/"
                sx={{ textDecoration: 'none', color: 'success.main' }}
              >
                {data?.company.name}
              </Typography>
            </Stack>
          }
          secondary={
            <Typography variant="caption" sx={{ color: 'secondary.light' }}>
              Posted date:{' '}
              {new Date(
                data?.datePosted || '2025-02-06T00:00:00.000Z'
              ).toLocaleDateString('en-US', {
                month: 'short',
                day: '2-digit',
                year: 'numeric',
              })}
            </Typography>
          }
        />
      </Stack>

      <Divider />

      <Stack
        direction="column"
        spacing={1}
        sx={{ p: 2, color: 'secondary.light' }}
      >
        <Stack direction="row" spacing={1} alignItems="center">
          <WorkIcon sx={{ fontSize: '1rem' }} />
          <Typography variant="caption">{data?.jobType}</Typography>
        </Stack>
        <Stack direction="row" spacing={1} alignItems="center">
          <AccountCircleIcon sx={{ fontSize: '1rem' }} />
          <Typography variant="caption">not specified</Typography>
        </Stack>
        <Stack direction="row" spacing={1} alignItems="center">
          <AccessTimeIcon sx={{ fontSize: '1rem' }} />
          <Typography variant="caption">{data?.employmentType}</Typography>
        </Stack>
        <Stack direction="row" spacing={1} alignItems="center">
          <FlagIcon sx={{ fontSize: '1rem' }} />
          <Typography variant="caption">
            {data?.country.toLowerCase()}
          </Typography>
        </Stack>
      </Stack>
    </Card>
  );
}

export default JobItem;
