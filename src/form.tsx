import * as React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { Button, TextField, MenuItem } from '@material-ui/core';

const radiusValues = [
  {
    value: '5',
    label: '5 km'
  },
  {
    value: '10',
    label: '10 km'
  },
  {
    value: '15',
    label: '15 km'
  },
  {
    value: '20',
    label: '20 km'
  }
]

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: '50ch',
      },
    },
  }),
);

export default function Form() {
  const classes = useStyles();
  const [radius, setRadius] = React.useState('5');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRadius(event.target.value);
  }

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <div>
        <TextField
          id="outlined-basic"
          label="Search Location"
          variant="outlined"
        />
        <TextField
          id="outlined-select-currency"
          select
          label="Select Search Radius"
          value={radius}
          onChange={handleChange}
          variant="outlined"
        >
          {radiusValues.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <Button variant="contained" color="primary" type="submit">
          Search
        </Button>
      </div>
    </form>
  );
}