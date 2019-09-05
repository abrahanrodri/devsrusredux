import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { Grid, Paper, TextField } from "@material-ui/core";
import "./css/createEvent.css";

const styles = theme => ({
  paper: {
    margin: "5%",
    textAlign: "center",
    height: "700px"
  },
  textField: {
    color: "black"
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
            <Grid item xs={12} sm={6}>
              <h1>Create Event</h1>

              {/* <TextField
                fullWidth
                id="standard-name"
                label="Event"
                name="Item"
                className={classes.textField}
                value={this.state.Item}
                onChange={this.handleChange}
                margin="normal"
              /> */}

              {/* <TextField
                id="filled-multiline-static"
                label="Event Name"
                multiline
                rows="6"
                defaultValue=""
                className={classes.textField}
                margin="normal"
                variant="filled"
              /> */}

              {/* <TextField
                item xs = {6}
                id="outlined-multiline-static"
                label="Event Name"
                multiline
                rows="4"
                defaultValue="Default Value"
                className={classes.textField}
                margin="normal"
                variant="outlined"
              /> */}

              {/* <TextField
                id="outlined-multiline-static"
                label="Event Details"
                multiline
                rows="6"
                defaultValue=""
                className={classes.textField}
                margin="normal"
                variant="outlined"
              /> */}

              <TextField
                id="outlined-name"
                label="Name"
                className={classes.textField}
                // value={values.name}
                // onChange={handleChange("name")}
                margin="normal"
                variant="outlined"
              />
            </Grid>

            <Grid field sm={12}>
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
