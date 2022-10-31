import * as React from 'react';
import { useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import WorkWizIcon from '../../assets/nlogo.png';
import Background from '../../assets/login_background.png';

const theme = createTheme();

function LandingLogin() {
  const navigate = useNavigate();

  const handleToLogin = (event) => {
    event.preventDefault();
    navigate('/login')
  };

  const handleToOnboard = (event) => {
    event.preventDefault();
    console.log('Onboard with Workwiz')
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
            <Box component="form" noValidate onSubmit={handleToLogin} sx={{ mt: 5 }} style={{ width: '100%' }}>
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 5, mb: 3 }}
                    style={{
                        width: '100%',
                        height: '60px',
                        color: '#FFF',
                        background: 'linear-gradient(110.97deg, #005073 3.37%, #189BD3 112.08%)',
                        border: '0.56px solid #E2DEF9',
                        boxShadow: '0px 15px 45px rgba(27, 29, 66, 0.139423)',
                        borderRadius: '16px'
                    }}
                >
                    Sign in to Workwiz Platform
                </Button>
            </Box>
            <Box component="form" noValidate onSubmit={handleToOnboard} style={{ width: '100%' }}>
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    style={{
                        width: '100%',
                        height: '60px',
                        color: '#189BD3',
                        background: '#FFF',
                        border: '0.56px solid #E2DEF9',
                        boxShadow: '0px 15px 45px rgba(27, 29, 66, 0.139423)',
                        borderRadius: '16px'
                    }}
                >
                    Onboard with Workwiz
                </Button>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}

export default LandingLogin;