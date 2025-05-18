// src/components/ExpenseItem.jsx
import React from 'react';
import '../styles/ExpenseItem.css';

const ExpenseItem = ({ expense, onDeleteExpense }) => {
  const { id, title, amount, date } = expense;

  return (
    <div className="expense-item">
      <div className="expense-info">
        <h3>{title}</h3>
        <p className="expense-date">{new Date(date).toLocaleDateString()}</p>
      </div>
      <div className="expense-right">
        <p className="expense-amount">₹{amount.toLocaleString('en-IN')}</p>
        <button className="delete-btn" onClick={() => onDeleteExpense(id)} aria-label="Delete expense">
          &times;
        </button>
      </div>
    </div>
  );
};

export default ExpenseItem;
