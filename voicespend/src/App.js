import React from 'react';
import { Grid } from '@material-ui/core';

import Details from './components/Details/Details';
import Main from './components/Main/Main';

import useStyles from './appStyles';

const App = () => {
    const classes = useStyles();
  return (
    <div>
        <Grid
        className={classes.grid}
        container
        spacing={3}
        alignItems='center'
        justify='center'
        style={{
          height: '100vh',
          borderRadius: '15px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        }}
      >
        <Grid item xs={12} sm={3} style={{ backgroundColor: '#add8e6', borderRadius: '15px' }} className={classes.mobile}>
            <Details title="Income" />
        </Grid>
        <Grid item xs={12} sm={3} style={{ backgroundColor: '#add8e6', borderRadius: '15px' }} className={classes.main}>
          <Details title="Expenses" />
        </Grid>
        <Grid item xs={12} sm={3} style={{ backgroundColor: '#add8e6', borderRadius: '15px' }} className={classes.desktop}>
          <Details title="Income" />
        </Grid>
        </Grid>
    </div>
  );
}

export default App