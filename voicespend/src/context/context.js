import React, { useReducer, createContext, useMemo } from "react";

import contextReducer from "./contextReducer";

const initialState = [];

export const ExpenseTrackerContext = createContext(initialState);

export const Provider = ({ children }) => {
  const [transactions, dispatch] = useReducer(contextReducer, initialState);

  
  const addTransaction = (transaction) =>
    dispatch({ type: "ADD_TRANSACTION", payload: transaction });
  const clearTransactions = () => dispatch({ type: "CLEAR_TRANSACTIONS" });

  const balance = useMemo(
    () =>
      transactions.reduce(
        (acc, currVal) =>
          currVal.type === "Expense"
            ? acc - currVal.amount
            : acc + currVal.amount,
        0
      ),
    [transactions]
  );

  return (
    <ExpenseTrackerContext.Provider value={{ appName: "Expense Tracker" }}>
      {children}
    </ExpenseTrackerContext.Provider>
  );
};