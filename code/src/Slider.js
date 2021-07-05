import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';

const useStyles = makeStyles({
  root: {
    width: 1000,
  },
});

export default function ContinuousSlider() {
  const classes = useStyles();
  const [value, setValue] = React.useState(30);
  const Cevent = new CustomEvent('slid', {detail: value});

  const handleChange = (event, newValue) => {
    setValue(newValue);
    //console.log(value)
    document.getElementById("slidey").dispatchEvent(Cevent);
  };

  return (
    <div className={classes.root}>
      <Typography id="continuous-slider" gutterBottom>
        Time
      </Typography>
      <Grid container spacing={2}>
        <Grid item>
        </Grid>
        <Grid item xs>
          <Slider value={value} onChange={handleChange} aria-labelledby="continuous-slider" 
          id="slidey"
          />
        </Grid>
        <Grid item>
        </Grid>
      </Grid>
    </div>
  );
}

