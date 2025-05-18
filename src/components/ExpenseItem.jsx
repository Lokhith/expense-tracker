// src/components/ExpenseItem.jsx
import React from 'react';
import '../styles/ExpenseItem.css';

const ExpenseItem = ({ expense }) => {
  return (
    <div className="expense-item">
      <div className="expense-date">{expense.date}</div>
      <div className="expense-details">
        <h3>{expense.title}</h3>
        <p>₹{expense.amount.toLocaleString('en-IN')}</p>
      </div>
    </div>
  );
};

export default ExpenseItem;
