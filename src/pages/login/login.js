import * as React from 'react';
import { useNavigate } from "react-router-dom";
import { Alert } from '@mui/material';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import WorkWizIcon from '../../assets/nlogo.png';
import Background from '../../assets/login_background.png';

const theme = createTheme();

function SignInSide() {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    if (data.get('email') === 'developera261@gmail.com' && data.get('password') === '12345678') {
      navigate('/dashboard')
    } else {
      console.log('your password is wrong')
      return <Alert severity="error">This is an error alert — check it out!</Alert>
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          sm={4}
          md={7}
          sx={{
            backgroundImage: `url('${Background}')`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 8,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <img src={WorkWizIcon} alt='Logo' width="200px" />
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 5 }}>
              <view style={{ width: '100%', height: '50px', borderRadius: '90px', borderWidth: '1' }}></view>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                style={{ borderRadius: "90px" }}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                style={{ borderRadius: "90px" }}
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 3 }}
                style={{ color: "white", backgroundColor: "DodgerBlue", padding: "10px", borderRadius: "90px", }}
              >
                Login
              </Button>
              <center>
                <Link href="/forgot-password" variant="body2" style={{ color: '#9E9E9E' }}>
                    Forgot Password
                </Link>
              </center>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}

export default SignInSide;