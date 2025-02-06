import React from "react";

import {
  Grid,
  Paper,
  Card,
  Stack,
  Button,
  Avatar,
  ListItemText,
  Typography,
  Link,
  Divider,
  Box,
} from "@mui/material";
import ShareIcon from "@mui/icons-material/Share";
import WorkIcon from "@mui/icons-material/Work";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import FlagIcon from "@mui/icons-material/Flag";

function JobItem() {
  return (
    <Card
      sx={{
        backgroundColor: "secondary.main",
        color: "white",
        direction: "ltr",
        width: '100%'
      }}
    >
      <Stack
        direction="row"
        justifyContent="flex-end"
        sx={{ position: "relative" }}
      >
        <Button
          aria-label="اشتراک‌گذاری"
          sx={{ position: "absolute", minWidth: "auto" }}
        >
          <ShareIcon sx={{ fontSize: "1rem", color: "secondary.light" }} />
        </Button>
      </Stack>

      <Stack direction="row" spacing={2} alignItems="center" sx={{ p: 2 }}>
        <Avatar
          src="https://jobs-kit.com/api/file/download/164255"
          alt="Get Your Beach On Travel"
          sx={{ borderRadius: "12px" }}
        />
        <ListItemText
          primary={
            <Stack>
              <Typography
                variant="body1"
                component="a"
                href="/job/418460/"
                sx={{ textDecoration: "none", color: "white" }}
              >
                Wanderlust Marketing Specialist
              </Typography>
              <Typography
                variant="body2"
                component="a"
                href="/job/company/20729/"
                sx={{ textDecoration: "none", color: "success.main" }}
              >
                Get Your Beach On Travel
              </Typography>
            </Stack>
          }
          secondary={
            <Typography variant="caption" sx={{ color: "secondary.light" }}>
              Posted date: 06 Feb 2025
            </Typography>
          }
        />
      </Stack>

      <Divider />

      <Stack
        direction="column"
        spacing={1}
        sx={{ p: 2, color: "secondary.light" }}
      >
        <Stack direction="row" spacing={1} alignItems="center">
          <WorkIcon sx={{ fontSize: "1rem" }} />
          <Typography variant="caption">remote</Typography>
        </Stack>
        <Stack direction="row" spacing={1} alignItems="center">
          <AccountCircleIcon sx={{ fontSize: "1rem" }} />
          <Typography variant="caption">not specified</Typography>
        </Stack>
        <Stack direction="row" spacing={1} alignItems="center">
          <AccessTimeIcon sx={{ fontSize: "1rem" }} />
          <Typography variant="caption">full time</Typography>
        </Stack>
        <Stack direction="row" spacing={1} alignItems="center">
          <FlagIcon sx={{ fontSize: "1rem" }} />
          <Typography variant="caption">United States</Typography>
        </Stack>
      </Stack>
    </Card>
  );
}

export default JobItem;
