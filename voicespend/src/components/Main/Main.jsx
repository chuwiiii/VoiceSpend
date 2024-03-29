import React, {useContext} from 'react';
import { Card, CardHeader, CardContent, Typography, Grid, Divider } from '@material-ui/core';
import { ExpenseTrackerContext } from '../../context/context';

import useStyles from './mainStyles';
import Form from './Form/Form';
import List from './List/List';

const Main = () => {
  const classes = useStyles();
  const { balance } = useContext(ExpenseTrackerContext);

  return (
    <Card className={classes.root}>
      <CardHeader
        title={
          <Typography variant="h4" className={classes.cardHeaderTitle}>
            VoiceSpend
          </Typography>
        }
      />
      <CardContent>
        <Typography align="center" variant="h5" className={classes.title}>
          {' '}
          Total balance: ${balance}
        </Typography>
        <Typography
          variant="subtitle1"
          className={`${classes.subtitle} ${classes.title}`}
          style={{ lineHeight: '1.5em', marginTop: '20px' }}
        >
        </Typography>
        <Divider className={classes.divider} />
        <Form />
      </CardContent>
      <CardContent className={classes.cardContent}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <List />
          </Grid>
        </Grid>
      </CardContent>
      <CardHeader subheader="powered by speechly" />
    </Card>
  );
};

export default Main;