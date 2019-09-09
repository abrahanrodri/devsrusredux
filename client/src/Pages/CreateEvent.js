import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { Grid, Paper, TextField } from "@material-ui/core";
import "./css/CreateEvent.css";
import Button from "@material-ui/core/Button";
import EventHolder from "../components/EventHolder/EventHolder";
import API from "../utils/API";

const styles = theme => ({
  paper: {
    margin: "5%",
    textAlign: "center",
    height: "400px",
    width: "500px",
    backgroundColor: "rgba(168, 166, 166, 0.65)"
  },
  textField: {
    color: "white"
  }
});

class CreateEvent extends React.Component {
  state = {
    name: "",
    location: "",
    description: ""
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  submitEvent = () => {
    API.postEvent(this.state)
      .then(dbData => {
        const newArr = this.props.Events;
        newArr.push(dbData.data);
        this.props.updateGlobalState("Events", newArr)
      })
      .catch(err => console.log(err));
  };

  render() {
    const { classes, Events } = this.props;
    console.log(Events)
    return (
      <div className={classes.root}>
        <Paper className={classes.paper}>
          <Grid container>
            <Grid item lg={12} md={6} color="white">
              <h1>Create Event {this.props.User.displayName}</h1>
              <TextField
                id="outlined-name"
                label="Name"
                name="name"
                value={this.state.name}
                onChange={this.handleChange}
                className={classes.textField}
                margin="normal"
                variant="outlined"
              />
              <TextField
                id="outlined-location"
                label="Location"
                name="location"
                value={this.state.location}
                onChange={this.handleChange}
                multiline
                className={classes.textField}
                margin="normal"
                variant="outlined"
              />
            </Grid>

            <Grid item sm={12}>
              <TextField
                id="outlined-multiline-static"
                label="Event Details"
                name="description"
                value={this.state.description}
                onChange={this.handleChange}
                multiline
                rows="6"
                className={classes.textField}
                margin="normal"
                variant="outlined"
              />
            </Grid>
          </Grid>
          <Button
            color="primary"
            className={classes.button}
            disabled={!this.props.User && true}
            onClick={this.submitEvent}
          >
            Create Event
          </Button>
        </Paper>
        <EventHolder Events={Events} />
      </div>
    );
  }
}

export default withStyles(styles)(CreateEvent);
