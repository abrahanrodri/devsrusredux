import React from "react";
import { Redirect } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import { Grid, Paper, TextField, Button, Box } from "@material-ui/core";
import "./css/CreateEvent.css";
import EventHolder from "../components/EventHolder/EventHolder";
import API from "../utils/API";

const styles = theme => ({
  paper: {
    // margin: "5%",
    // textAlign: "center",
    // height: "400px",
    // width: "500px",
    width: "100%",
    backgroundColor: "rgba(168, 166, 166, 0.65)"
  },
  textField: {
    color: "white"
  }
});

class CreateEvent extends React.Component {
  state = {
    id: "",
    name: "",
    location: "",
    description: "",
    createEvent: true,
    updateEvent: false
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  editEvent = () => {
    console.log(this.state);
    API.updateEvent({
      id: this.state.id,
      name: this.state.name,
      location: this.state.location,
      description: this.state.description
    })
      .then(dbData => {
        this.props.updateGlobalState("Events", dbData.data);
        this.cancelEdit();
      })
      .catch(error => {
        console.log(error);
      });
  };

  cancelEdit = () => {
    this.setState({
      name: "",
      location: "",
      description: "",
      createEvent: true,
      updateEvent: false
    });
  };

  submitEvent = () => {
    API.postEvent({
      name: this.state.name,
      location: this.state.location,
      description: this.state.description
    })
      .then(dbData => {
        const newArr = this.props.Events;
        newArr.push(dbData.data);
        this.props.updateGlobalState("Events", newArr);
        this.setState({
          name: "",
          location: "",
          description: ""
        });
      })
      .catch(err => console.log(err));
  };

  selectEvent = ({ id, name, location, description }) => {
    this.setState({
      id,
      name,
      location,
      description,
      createEvent: false,
      updateEvent: true
    });
  };

  render() {
    const { classes, Events, updateGlobalState, User: LoggedIn } = this.props;
    return (
      <div className={classes.root}>
        {!LoggedIn && <Redirect to="/login" />}
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} color="white">
            <Box m={2}>
              <Paper className={classes.paper}>
                <Box p={2}>
                  <h1>
                    {this.state.createEvent && "Create Event:"}
                    {this.state.updateEvent && "Edit Event:"}
                    <br />
                    {this.props.User.name}
                  </h1>

                  <TextField
                    fullWidth
                    id="outlined-name"
                    label="Name"
                    name="name"
                    value={this.state.name}
                    onChange={this.handleChange}
                    className={classes.textField}
                    margin="normal"
                    variant="outlined"
                    disabled={!this.props.User && true}
                  />
                  <TextField
                    fullWidth
                    id="outlined-location"
                    label="Location"
                    name="location"
                    value={this.state.location}
                    onChange={this.handleChange}
                    multiline
                    className={classes.textField}
                    margin="normal"
                    variant="outlined"
                    disabled={!this.props.User && true}
                  />
                  <TextField
                    fullWidth
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
                    disabled={!this.props.User && true}
                  />
                  {this.state.updateEvent && (
                    <Button
                      fullWidth
                      color="primary"
                      className={classes.button}
                      onClick={this.cancelEdit}
                    >
                      Cancel
                    </Button>
                  )}
                  <Button
                    fullWidth
                    color="primary"
                    className={classes.button}
                    disabled={!this.props.User && true}
                    onClick={
                      (this.state.createEvent && this.submitEvent) ||
                      (this.state.updateEvent && this.editEvent)
                    }
                  >
                    {this.state.createEvent && "Create"}
                    {this.state.updateEvent && "Edit"}
                  </Button>
                </Box>
              </Paper>
            </Box>
          </Grid>

          <Grid item xs={12} sm={6}>
            <Box m={2}>
              <Paper className={classes.paper}>
                <Box p={2}>
                  <EventHolder
                    Events={Events}
                    updateGlobalState={updateGlobalState}
                    selectEvent={this.selectEvent}
                  />
                </Box>
              </Paper>
            </Box>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(CreateEvent);
