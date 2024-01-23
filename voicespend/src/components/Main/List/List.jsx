import React from 'react';
import { List as MUIList, ListItem, ListItemAvatar, ListItemText, Avatar, ListItemSecondaryAction, IconButton, Slide } from '@material-ui/core';
import { Delete, MoneyOff } from '@material-ui/icons';

import useStyles from './listStyles';

const List = () => {
    const classes = useStyles();

    const transactions = [
        {id: 1, type: "Income", category: 'Salary', amount: 50, date: "Fri Jan 19 2024" },
        {id: 2, type: "Expense", category: 'Business', amount: 1000, date: "Fri Jan 21 2024" },
    {id: 3, type: "Income", category: 'Salary', amount: 5000, date: "Fri Jan 29 2024" },
  ];

  return (
    <MUIList dense={false} className={classes.list}>
      {transactions.map((transaction) => (
         <Slide direction="down" in mountOnEnter unmountOnExit key={transaction.id}>
         <ListItem>
         <ListItemAvatar>
                <Avatar className={transaction.type === 'Income' ? classes.avatarIncome : classes.avatarExpense}>
                  <MoneyOff />
                </Avatar>
                </ListItemAvatar>
              <ListItemText primary={transaction.category} secondary={`$${transaction.amount} - ${transaction.date}`}/>
              <ListItemSecondaryAction>
                <IconButton edge="end" aria-label="delete" onClick="">
                  <Delete />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
        </Slide>
      ))}
    </MUIList>
  );
}

export default List