import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
// import DashboardIcon from '@mui/icons-material/Dashboard';
// import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PeopleIcon from '@mui/icons-material/People';
// import BarChartIcon from '@mui/icons-material/BarChart';
// import LayersIcon from '@mui/icons-material/Layers';
import AssignmentIcon from '@mui/icons-material/Assignment';

export const mainListItems = (
  <React.Fragment>
    <ListSubheader component="div" style={{ backgroundColor: '#002F43', color: '#FFF' }}>
        Appointment
    </ListSubheader>
    <ListItemButton style={{ backgroundColor: '#002F43', color: '#FFF' }}>
      <PeopleIcon style={{ paddingRight: '10px' }} />
      <ListItemText primary="My Listing" />
    </ListItemButton>
    <ListItemButton style={{ backgroundColor: '#002F43', color: '#FFF' }}>
      <PeopleIcon style={{ paddingRight: '10px' }} />
      <ListItemText primary="New Appointment" />
    </ListItemButton>
    <ListItemButton style={{ backgroundColor: '#002F43', color: '#FFF' }}>
      <PeopleIcon style={{ paddingRight: '10px' }} />
      <ListItemText primary="Upcoming" />
    </ListItemButton>
    <ListItemButton style={{ backgroundColor: '#002F43', color: '#FFF' }}>
      <PeopleIcon style={{ paddingRight: '10px' }} />
      <ListItemText primary="Past Bookings" />
    </ListItemButton>

    <ListSubheader component="div" style={{ backgroundColor: '#002F43', color: '#FFF' }}>
        Profile
    </ListSubheader>
    <ListItemButton style={{ backgroundColor: '#002F43', color: '#FFF' }}>
      <PeopleIcon style={{ paddingRight: '10px' }} />
      <ListItemText primary="Edit Profile" />
    </ListItemButton>
    
    <ListSubheader component="div" style={{ backgroundColor: '#002F43', color: '#FFF' }}>
        Time Slot Management
    </ListSubheader>
    <ListItemButton style={{ backgroundColor: '#002F43', color: '#FFF' }}>
      <PeopleIcon style={{ paddingRight: '10px' }} />
      <ListItemText primary="Timetable" />
    </ListItemButton>
    
    <ListSubheader component="div" style={{ backgroundColor: '#002F43', color: '#FFF' }}>
        Others
    </ListSubheader>
    <ListItemButton style={{ backgroundColor: '#002F43', color: '#FFF' }}>
      <PeopleIcon style={{ paddingRight: '10px' }} />
      <ListItemText primary="Check in - Check out" />
    </ListItemButton>
    <ListItemButton style={{ backgroundColor: '#002F43', color: '#FFF' }}>
      <PeopleIcon style={{ paddingRight: '10px' }} />
      <ListItemText primary="Finance Report" />
    </ListItemButton>
    <ListItemButton style={{ backgroundColor: '#002F43', color: '#FFF' }}>
      <PeopleIcon style={{ paddingRight: '10px' }} />
      <ListItemText primary="E - Appraisal" />
    </ListItemButton>
  </React.Fragment>
);

export const secondaryListItems = (
  <React.Fragment>
    <ListSubheader component="div">
      Saved reports
    </ListSubheader>
    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Current month" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Last quarter" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Year-end sale" />
    </ListItemButton>
  </React.Fragment>
);