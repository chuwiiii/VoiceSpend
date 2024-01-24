import React, { useEffect, useReducer, createContext, useMemo } from 'react';

import contextReducer from './contextReducer';

const initialState = [];

export const ExpenseTrackerContext = createContext(initialState);

export const Provider = ({ children }) => {
  const [transactions, dispatch] = useReducer(contextReducer, initialState);

  const deleteTransaction = (id) =>
    dispatch({ type: 'DELETE_TRANSACTION', payload: id });
  const addTransaction = (transaction) =>
    dispatch({ type: 'ADD_TRANSACTION', payload: transaction });
  const clearTransactions = () =>
    dispatch({ type: 'CLEAR_TRANSACTIONS' });

  const balance = useMemo(() =>
    transactions.reduce((acc, currVal) => currVal.type === 'Expense' ? acc - currVal.amount : acc + currVal.amount, 0),
    [transactions]
  );

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

  return (
    <ExpenseTrackerContext.Provider
      value={{
        deleteTransaction,
        addTransaction,
        clearTransactions,
        transactions,
        balance,
      }}
    >
      {children}
    </ExpenseTrackerContext.Provider>
  );
};