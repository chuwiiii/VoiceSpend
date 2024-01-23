import React, { useEffect } from 'react';
import { Card, CardHeader, CardContent, Typography } from '@material-ui/core';
import useTransactions from '../../useTransactions';
import useStyles from './detailsStyles';



const Details = ({ title }) => {
  const classes = useStyles();
  const { total } = useTransactions(title);

  useEffect(() => {
    document.title = `VoiceSpend`;
  }, []);


  return (
    <Card className={title === 'Income' ? classes.income : classes.expense}>
      <CardHeader title={title} />
      <CardContent>
        <Typography variant="h5">${total}</Typography>
      </CardContent>
    </Card>
  );
};

export default Details;