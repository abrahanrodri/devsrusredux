import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Grid, Paper, TextField } from '@material-ui/core';

const styles = theme => ({
  paper: {
    margin: "5%",
    textAlign: 'center',
    height: '300px',
  },
  textField: {
    margin: '5%',
    color: "black",
  }

});

class CreateEvent extends React.Component {
  state = {
    Item: ""
  }

  handleChange = (event) => {
    console.log(event.target.name, event.target.value)
    const { name, value } = event.target;
    this.setState({ [name]: value })
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Paper className={classes.paper}>
          <Grid container>
            <Grid item xs={12} sm = {6}>
              <h1>Create Event</h1>

              <TextField
                fullWidth
                id="standard-name"
                label="Event"
                name="Item"
                className={classes.textField}
                value={this.state.Item}
                onChange={this.handleChange}
                margin="normal"
              />



            </Grid>
          </Grid>
        </Paper>
      </div>
    );
  }
}

export default withStyles(styles)(CreateEvent);