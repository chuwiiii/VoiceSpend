import { useEffect, createContext, useReducer, useMemo } from 'react';
import contextReducer from './contextReducer';
import axios from 'axios';

const initialState = [];

export const ExpenseTrackerContext = createContext(initialState);

export const Provider = ({ children }) => {
  const [transactions, dispatch] = useReducer(contextReducer, initialState);

  useEffect(() => {
    axios.get('http://localhost:5000/transactions') // Update with your backend URL
      .then((response) => dispatch({ type: 'SET_TRANSACTIONS', payload: response.data }))
      .catch((error) => console.error(error));
  }, []);

  const addTransaction = (transaction) => {
    axios.post('http://localhost:5000/transactions', transaction) // Update with your backend URL
      .then((response) => dispatch({ type: 'ADD_TRANSACTION', payload: response.data }))
      .catch((error) => console.error(error));
  };

  const deleteTransaction = (id) => {
    axios.delete(`http://localhost:5000/transactions/${id}`) // Update with your backend URL
      .then(() => dispatch({ type: 'DELETE_TRANSACTION', payload: id }))
      .catch((error) => console.error(error));
  };

  const updateTransaction = (updatedTransaction) => {
    axios.put(`http://localhost:5000/transactions/${updatedTransaction.id}`, updatedTransaction) // Update with your backend URL
      .then(() => dispatch({ type: 'UPDATE_TRANSACTION', payload: updatedTransaction }))
      .catch((error) => console.error(error));
  };

  const clearTransactions = () => {
    axios.delete('http://localhost:5000/transactions') // Update with your backend URL
      .then(() => dispatch({ type: 'CLEAR_TRANSACTIONS' }))
      .catch((error) => console.error(error));
  };

  const balance = useMemo(() =>
    transactions.reduce((acc, currVal) => (currVal.type === 'Expense' ? acc - currVal.amount : acc + currVal.amount), 0),
    [transactions]
  );

  return (
    <ExpenseTrackerContext.Provider
      value={{
        addTransaction,
        deleteTransaction,
        updateTransaction,
        clearTransactions,
        transactions,
        balance,
      }}
    >
      {children}
    </ExpenseTrackerContext.Provider>
  );
};