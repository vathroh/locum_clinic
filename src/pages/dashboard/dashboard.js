import * as React from 'react';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import MuiDrawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
// import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
// import Link from '@mui/material/Link';
import { mainListItems } from './listItems';

// function Copyright(props) {
//   return (
//     <Typography variant="body2" color="text.secondary" align="center" {...props}>
//       {'Copyright © '}
//       <Link color="inherit" href="https://mui.com/">
//         WorkWiz
//       </Link>{' '}
//       {new Date().getFullYear()}
//       {'.'}
//     </Typography>
//   );
// }

const drawerWidth = 240;

// const AppBar = styled(MuiAppBar, {
//   shouldForwardProp: (prop) => prop !== 'open',
// })(({ theme, open }) => ({
//   zIndex: theme.zIndex.drawer + 1,
//   transition: theme.transitions.create(['width', 'margin'], {
//     easing: theme.transitions.easing.sharp,
//     duration: theme.transitions.duration.leavingScreen,
//   }),
//   ...(open && {
//     marginLeft: drawerWidth,
//     width: `calc(100% - ${drawerWidth}px)`,
//     transition: theme.transitions.create(['width', 'margin'], {
//       easing: theme.transitions.easing.sharp,
//       duration: theme.transitions.duration.enteringScreen,
//     }),
//   }),
// }));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    '& .MuiDrawer-paper': {
      position: 'relative',
      whiteSpace: 'nowrap',
      width: drawerWidth,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
      boxSizing: 'border-box',
      ...(!open && {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing(7),
        [theme.breakpoints.up('sm')]: {
          width: theme.spacing(9),
        },
      }),
    },
  }),
);

const mdTheme = createTheme();

function DashboardContent() {
  const [open] = React.useState(true);
  // const toggleDrawer = () => {
  //   setOpen(!open);
  // };

  return (
    <ThemeProvider theme={mdTheme}>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <Drawer variant="permanent" open={open} style={{ height: '100%', backgroundColor: '#002F43' }}>
          <List component="nav" style={{ backgroundColor: '#002F43', height: '100%' }}>
            {mainListItems}
          </List>
        </Drawer>
        <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === 'light'
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: '100vh',
            overflow: 'auto',
          }}
        >
          <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <Grid container spacing={3}>
              <Grid item xs={12} md={8} lg={9} />
              <Grid item xs={12} md={4} lg={3}>
                <button
                  style={{
                    width: '246px',
                    height: '52px',
                    background: 'linear-gradient(110.97deg, #005073 3.37%, #189BD3 112.08%)',
                    border: '0.56px solid #E2DEF9',
                    boxShadow: '0px 15px 45px rgba(27, 29, 66, 0.139423)',
                    borderRadius: '10px',
                    color: '#E2DEF9'
                  }}
                >
                  List New
                </button>
              </Grid>
              <Grid item xs={12} style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <button
                  style={{
                    width: '246px',
                    height: '52px',
                    background: '#005073',
                    border: '0px',
                    boxShadow: '0px',
                    borderRadius: '8px',
                    color: '#E2DEF9',
                  }}
                >
                  Locum Doctor
                </button>
                <button style={{ width: '10px', height: '10px', background: 'transparent', border: '0px', boxShadow: '0px' }} />
                <button
                  style={{
                    width: '246px',
                    height: '52px',
                    background: '#005073',
                    border: '0px',
                    boxShadow: '0px',
                    borderRadius: '8px',
                    color: '#E2DEF9'
                  }}
                >
                  Clinic Assistant
                </button>
              </Grid>

              <br />
              <Grid item xs={12}>
                <Divider style={{ background: '#000' }} />
              </Grid>
              <br />

              <Grid container xs={12} spacing={3} style={{ flexDirection: 'row', paddingTop: '25px', paddingLeft: '25px' }}>
                <Grid item xs={12} md={4} lg={5}>
                  <Paper
                    sx={{
                      p: 2,
                      display: 'flex',
                      flexDirection: 'column',
                      height: 314,
                    }}
                  >
                  </Paper>
                </Grid>
                <Grid item xs={12} md={4} lg={5}>
                  <Paper
                    sx={{
                      p: 2,
                      display: 'flex',
                      flexDirection: 'column',
                      height: 314,
                    }}
                  >
                  </Paper>
                </Grid>
                <Grid item xs={12} md={4} lg={5}>
                  <Paper
                    sx={{
                      p: 2,
                      display: 'flex',
                      flexDirection: 'column',
                      height: 314,
                    }}
                  >
                  </Paper>
                </Grid>
                <Grid item xs={12} md={4} lg={5}>
                  <Paper
                    sx={{
                      p: 2,
                      display: 'flex',
                      flexDirection: 'column',
                      height: 314,
                    }}
                  >
                  </Paper>
                </Grid>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default function Dashboard() {
  return <DashboardContent />;
}