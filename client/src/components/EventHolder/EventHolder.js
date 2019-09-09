import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { Grid, Paper } from "@material-ui/core";
import "./EventHolder.css";
import Button from "@material-ui/core/Button";
import API from "../../utils/API";

const styles = theme => ({
  paper: {
    margin: "5%",
    textAlign: "center",
    height: "500px",
    width: "500px",
    backgroundColor: "rgba(168, 166, 166, 0.65)"
  },
  textField: {
    color: "white"
  }
});

class EventHolder extends React.Component {
  state = {
    Item: ""
  };

  handleChange = event => {
    console.log(event.target.name, event.target.value);
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  deleteEvent = id => {
    console.log(id)
    API.deleteEvent(id)
    .then(function(dbData){
      console.log(dbData)
    })
    .catch(function(error){
      console.log(error)
    })
  }

  render() {
    const { classes, Events } = this.props;
    return (
      <div className={classes.root}>
        <Paper className={classes.paper}>
          <Grid container>
            <Grid item lg={12} md={6} color="white">
              <h1>Your Events</h1>
              {Events &&
                Events.map((event, i) => (
                  <Event event={event} deleteEvent={this.deleteEvent} classes={classes} key={i + "-event"} />
                ))}
            </Grid>
            <Grid item sm={12}></Grid>
          </Grid>
        </Paper>
      </div>
    );
  }
}
export default withStyles(styles)(EventHolder);

const Event = ({ event, deleteEvent, classes }) => {
  return (
    <div>
      <h5>{event.name}</h5>
      <p>{event.location}</p>
      <p>{event.description}</p>

      <Button
        onClick={() => deleteEvent(event.id)}
        color="primary"
        className={classes.button}
      >
        Delete Event
      </Button>

      <Button color="primary" className={classes.button}>
        Edit Event
      </Button>
    </div>
  );
};
