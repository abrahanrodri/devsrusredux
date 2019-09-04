import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
  },
  input: {
    display: 'none',
  },
}));

export default function ContainedButtons() {
  const comments = useStyles();

  return (
    <div>
      <Button variant="contained" className={classes.comments}>
        Default
      </Button>
      <comments variant="contained" href="#contained-buttons" className={classes.comments}>
      Link
    </comments>
    </div>
    );
}

