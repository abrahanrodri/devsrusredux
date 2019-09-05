import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { Grid, Paper, TextField } from "@material-ui/core";
import "./css/createEvent.css";

const styles = theme => ({
  paper: {
    margin: "5%",
    textAlign: "center",
  height: "400px",
  width: "500px",
  backgroundColor: 'rgba(194, 186, 186, 0.65)',
  
  },
  textField: {
    color: "white"
    // width: "100%"
  }
});

class CreateEvent extends React.Component {
  state = {
    Item: ""
  };

  handleChange = event => {
    console.log(event.target.name, event.target.value);
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Paper className={classes.paper}>
          <Grid container>
            <Grid item lg={12} md={6} color='white'>
              <h1>Create Event</h1>
              <TextField
                id="outlined-name"
                label="Name"
                className={classes.textField}
                // value={values.name}
                // onChange={handleChange("name")}
                margin="normal"
                variant="outlined"
              />
               <TextField
                id="outlined-location"
                label="Location"
                multiline
                className={classes.textField}
                margin="normal"
                variant="outlined"
              />
              
            </Grid>

            {/* <Grid location sm= {6}>
              <TextField
                id="outlined-location"
                label="Location"
                multiline
                className={classes.textField}
                margin="normal"
                variant="outlined"
              />
            </Grid> */}

            <Grid item sm={12}>
              <TextField
                id="outlined-multiline-static"
                label="Event Details"
                multiline
                rows="6"
                defaultValue=""
                className={classes.textField}
                margin="normal"
                variant="outlined"
              />
            </Grid>
          </Grid>
        </Paper>
      </div>
    );
  }
}

export default withStyles(styles)(CreateEvent);
