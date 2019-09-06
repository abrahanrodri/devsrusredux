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
import { Link } from'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

// function TabPanel(props) {
//   const { children, value, index, ...other } = props;

//   return (
//     <Typography
//       component="div"
//       role="tabpanel"
//       hidden={value !== index}
//       id={`simple-tabpanel-${index}`}
//       aria-labelledby={`simple-tab-${index}`}
//       {...other}
//     >
//       <Box p={3}>{children}</Box>
//     </Typography>
//   );
// }

// TabPanel.propTypes = {
//   children: PropTypes.node,
//   index: PropTypes.any.isRequired,
//   value: PropTypes.any.isRequired,
// };
const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
});

class NavTabs extends React.Component {
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Tabs value={this.state.value} onChange={this.handleChange} aria-label="simple tabs example">
            <Tab label="Home" component={Link} to="/home"/>
            <Tab label="Create Event" component={Link} to="/create"/>
            <Tab label="Comments" component={Link} to="/comments"/>
            <Tab label="Login" component={Link} to="/login"/>
          </Tabs>
        </AppBar>
      </div>
    )
  }
}
export default withStyles(styles)(NavTabs);