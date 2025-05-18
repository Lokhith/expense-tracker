// src/components/ExpenseItem.jsx
import React from 'react';
import '../styles/ExpenseItem.css';

const ExpenseItem = ({ expense, onDeleteExpense }) => {
  return (
    <div className="expense-item">
      <div className="expense-date">
        <span>{expense.date}</span>
      </div>
      <div className="expense-details">
        <h3>{expense.title}</h3>
        <p>₹{expense.amount.toLocaleString('en-IN')}</p>
      </div>
      <button 
        className="delete-button" 
        onClick={() => onDeleteExpense(expense.id)}
      >
        ✖
      </button>
    </div>
  );
};

export default ExpenseItem;
