'use client';

import React from 'react';
import { Button, TextField, Box, Typography, Container } from '@mui/material';
import { signIn } from 'next-auth/react';
import { redirect, useRouter } from 'next/navigation';

function LoginForm() {
  const router = useRouter()

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const result = await signIn('credentials', {
      username: event.target[0].value,
      password: event.target[2].value,
      redirect: true,
      callbackUrl: '/dashboard'
    });

    if (result?.error) {
      console.error(result.error);
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography
          component="h1"
          variant="h5"
          sx={{
            textAlign: 'right',
            width: '100%',
          }}
        >
          ورود به جابزکیت
        </Typography>
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="username"
            label="نام کاربری"
            name="username"
            autoComplete="username"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="رمز عبور"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <Button
            type="submit"
            size="large"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            ورود
          </Button>
        </Box>
      </Box>
    </Container>
  );
}

LoginForm.displayName = 'LoginForm';

export default LoginForm;
