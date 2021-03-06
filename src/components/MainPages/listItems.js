import React from 'react';
import { Link } from "react-router-dom";
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
// import ListSubheader from '@material-ui/core/ListSubheader';
import PersonIcon from '@material-ui/icons/Person';
// import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
// import PeopleIcon from '@material-ui/icons/People';
// import BarChartIcon from '@material-ui/icons/BarChart';
// import LayersIcon from '@material-ui/icons/Layers';
// import AssignmentIcon from '@material-ui/icons/Assignment';
import CommentIcon from '@material-ui/icons/Comment';


export const mainListItems = (
  <div>
    {/* Dashboard */}
    <ListItem button component={Link} to="/dashboard">
      <ListItemIcon>
        <PersonIcon />
      </ListItemIcon>
      {/* <ListItem button component={Link} to="/dashboard"/> */}
      <ListItemText primary="Profile" />
    </ListItem>
    {/* End Dashboard */}


    <ListItem button component={Link} to="/post">
      <ListItemIcon>
        <CommentIcon />
      </ListItemIcon>
      <ListItemText primary="Posts" />
    </ListItem>


    {/* <ListItem button>
      <ListItemIcon>
        <ExitToAppIcon />
      </ListItemIcon>
      <ListItemText primary="Logout" />
    </ListItem> */}

    {/* <ListItem button>
      <ListItemIcon>
        <PeopleIcon />
      </ListItemIcon>
      <ListItemText primary="Customers" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <BarChartIcon />
      </ListItemIcon>
      <ListItemText primary="Reports" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <LayersIcon />
      </ListItemIcon>
      <ListItemText primary="Integrations" />
    </ListItem> */}
  </div>
  
);

export const secondaryListItems = (
  <div>
    {/* <ListSubheader inset>Saved reports</ListSubheader>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Current month" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Last quarter" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Year-end sale" />
    </ListItem> */}
  </div>
);