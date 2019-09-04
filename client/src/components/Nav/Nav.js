// import React from "react";
// import { Link } from "react-router-dom";
// import "./Nav.css";

// function Navbar() {
//   return (
//     <nav className="navbar navbar-expand-lg navbar-light bg-light">
//       <Link className="navbar-brand" to="/">
//         DevsR'Us
//       </Link>
//       <div>
//         <ul className="navbar-nav">
//           <li className="nav-item">
//             <Link
//               to="/"
//               className={
//                 window.location.pathname === "/" ||
//                 window.location.pathname === "/eventView"
//                   ? "nav-link active"
//                   : "nav-link"
//               }
//             >
//               Event View
//             </Link>
//           </li>
//           <li className="nav-item">
//             <Link
//               to="/CreateEvent"
//               className={
//                 window.location.pathname === "/CreateEvent"
//                   ? "nav-link active"
//                   : "nav-link"
//               }
//             >
//               Create Event
//             </Link>
//           </li>
//           <li className="nav-item">
//             <Link
//               to="/Comments"
//               className={
//                 window.location.pathname === "/Comments"
//                   ? "nav-link active"
//                   : "nav-link"
//               }
//             >
//               Comments
//             </Link>
//           </li>
//         </ul>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;

import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      <Box p={3}>{children}</Box>
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function SimpleTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  function handleChange(event, newValue) {
    setValue(newValue);
  }

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
          <Tab label="Create Event" {...a11yProps(0)} />
          <Tab label="Comments" {...a11yProps(1)} />
          <Tab label="Home Page" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        CreateEvent
      </TabPanel>
      <TabPanel value={value} index={1}>
        Comments
      </TabPanel>
      <TabPanel value={value} index={2}>
        Home Page
      </TabPanel>
    </div>
  );
}


export default Navbar;

