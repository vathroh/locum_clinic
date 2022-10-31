import * as React from 'react';
import { useNavigate } from "react-router-dom";
// import { Alert } from '@mui/material';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import WorkWizWhiteIcon from '../../assets/nlogo_white.png';
import Background from '../../assets/login_background.png';

const theme = createTheme();

function SignInSide() {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate('/login')
    // const data = new FormData(event.currentTarget);
    // if (data.get('password') === '12345678' && data.get('password') === '12345678') {
    // } else {
    //   console.log('your password is wrong')
    //   return <Alert severity="error">This is an error alert — check it out!</Alert>
    // }
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
        >
          <view style={{ paddingLeft: '50px' }}>
            <img src={WorkWizWhiteIcon} alt='Logo' width="150px" style={{ paddingTop: '50px' }} />
          </view>
        </Grid>
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
            <view style={{ width: '100%', padding: '20px', background: '#F2F7FB', borderRadius: '15px' }}>
              <text
                style={{ color: '#363636', fontSize: '18px', fontWeight: 'bold' }}
              >
                Create your new password
              </text><br/><br/>
              <text
                style={{ color: '#858585', fontSize: '16px', fontWeight: 'normal' }}
              >
                MUST contain at least 8 characters
              </text><br/>
              <text
                style={{ color: '#858585', fontSize: '16px', fontWeight: 'normal' }}
              >
                MUST contain at least one uppercase letter.
              </text><br/>
              <text
                style={{ color: '#858585', fontSize: '16px', fontWeight: 'normal' }}
              >
                MUST contain at least one lowercase letter.
              </text><br/>
              <text
                style={{ color: '#858585', fontSize: '16px', fontWeight: 'normal' }}
              >
                MUST contain at least one number.
              </text><br/>
              <text
                style={{ color: '#858585', fontSize: '16px', fontWeight: 'normal' }}
              >
                MUST contain at least one special character
              </text>
            </view>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 5 }}>
              <view style={{ width: '100%', height: '50px' }}></view>
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Enter New Password"
                type="password"
                id="password"
                autoComplete="current-password"
                style={{ borderRadius: "90px" }}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Confirm New Password"
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
                style={{
                  height: '55px',
                  fontWeight: 'bold',
                  color: 'white',
                  background: 'linear-gradient(110.97deg, #1788B9 3.37%, #72C7EC 112.08%)',
                  borderRadius: "90px"
                }}
              >
                Confirm Password
              </Button>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}

export default SignInSide;