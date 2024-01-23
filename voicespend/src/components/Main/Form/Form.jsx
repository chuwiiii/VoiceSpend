import React from 'react';
import { TextField, Typography, Grid, Button, FormControl, InputLabel, Select, MenuItem } from '@material-ui/core';
import { ExpenseTrackerContext } from '../../../context/context';
import { v4 as uuidv4 } from 'uuid';


import formatDate from '../../../utils/formatDate';
import { incomeCategories, expenseCategories } from '../../../constants/categories';
import CustomizedSnackbar from '../../Snackbar/snackbar';
import useStyles from './formStyles';

const initialState = {
    amount: '',
    category: '',
    type: 'Income',
    date: formatDate(new Date()),
  };

    const Form = () => {
    const classes = useStyles();
    const [formData, setFormData] = useState(initialState);
    const { addTransaction, clearTransactions } = useContext(ExpenseTrackerContext);
    const [open, setOpen] = useState(false);


    const createTransaction = () => {
        const transaction = { ...formData, amount: Number(formData.amount), id: uuidv4() };
    
        setOpen(true);
        addTransaction(transaction);
        setFormData(initialState);
      };

      const selectedCategories = formData.type === 'Income' ? incomeCategories : expenseCategories;
    
      return (
        <Grid container spacing={2}>
          <CustomizedSnackbar open={open} setOpen={setOpen} />
          <Grid item xs={12}>
            <Typography align="center" variant="subtitle2" gutterBottom>
              ...
            </Typography>
          </Grid>
        <Grid item xs={6}>
        <FormControl fullWidth>
        <InputLabel>Type</InputLabel>
        <Select>
        <MenuItem value="Income">Income</MenuItem>
                    <MenuItem value="Expense">Expense</MenuItem>
                </Select>
                </FormControl>
        </Grid>
        <Grid item xs={6}>
        <FormControl fullWidth>
                <InputLabel>Category</InputLabel>
                <Select>
                    <MenuItem value="business">Business</MenuItem>
                    <MenuItem value="salary">Salary</MenuItem>
                </Select>
                </FormControl>
        </Grid>
        <Grid item xs={6}>
        <TextField type="number" label="Amount" fullWidth />
        </Grid>
        <Grid item xs={6}>
            <TextField type="date" label="Date" fullWidth />
        </Grid>
        <Button className={classes.button} variant="outlined" color="primary" fullWidth></Button>
    </Grid>
  );
}

export default Form;