import React from 'react';
import { List as MUIList, ListItem, ListItemAvatar, ListItemText, Avatar, ListItemSecondaryAction, IconButton, Slide } from '@material-ui/core';
import { Delete, MoneyOff } from '@material-ui/icons';

import useStyles from './listStyles';

const List = () => {
    const classes = useStyles();
    const transactions = [
        {id: 1, type: "Income", category: 'Salary', amount: 50, date: "Fri Jan 19 2024" },