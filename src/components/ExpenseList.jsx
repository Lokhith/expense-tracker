// src/components/ExpenseList.jsx
import React from 'react';
import ExpenseItem from './ExpenseItem';
import '../styles/ExpenseList.css';

const ExpenseList = ({ expenses }) => {
  if (expenses.length === 0) {
    return <p className="no-expenses">No expenses found. Start adding some!</p>;
  }

  return (
    <div className="expense-list">
      {expenses.map((expense) => (
        <ExpenseItem key={expense.id} expense={expense} />
      ))}
    </div>
  );
};

export default ExpenseList;
