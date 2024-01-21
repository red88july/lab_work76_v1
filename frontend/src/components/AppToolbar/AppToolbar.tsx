'use client';
import React from 'react';
import { AppBar, styled, Toolbar, Typography } from '@mui/material';
import NextLink from 'next/link';

const Link = styled(NextLink) ({
  color: 'inherit',
  textDecoration: 'none',
  '&:hover': {
    color: 'inherit',
  }
});

const AppToolbar = () => {
  return (
    <AppBar position="sticky" sx={{mb:2}}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
          <Link href="/">Chat</Link>
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default AppToolbar;