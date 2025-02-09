import { AccountCircle } from '@mui/icons-material';
import { Avatar, IconButton, Menu, MenuItem } from '@mui/material';
import React, { useState } from 'react';

function ProfileDropdown() {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleHomepageClick = () => {
    handleMenuClose();
  };

  const handleLogoutClick = () => {
    handleMenuClose();
  };

  return (
    <>
      <IconButton
        size="large"
        edge="start"
        aria-label="account of current user"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={handleMenuOpen}
        color="inherit"
      >
        <Avatar>
          <AccountCircle />
        </Avatar>
      </IconButton>
      <Menu
        id="menu-appbar"
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'bottom', // Menu opens at the bottom of the avatar
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top', // Menu aligns to the top of the anchor
          horizontal: 'right',
        }}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
        PaperProps={{
          style: {
            width: '200px', // Set the width of the menu
          },
        }}
      >
        <MenuItem onClick={handleHomepageClick}>Homepage</MenuItem>
        <MenuItem onClick={handleLogoutClick}>Logout</MenuItem>
      </Menu>
    </>
  );
}

export default ProfileDropdown;
