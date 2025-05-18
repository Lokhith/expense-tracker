import React from 'react';
import '../styles/ExpenseList.css';

const ExpenseList = ({ expenses, onDelete }) => {
  if (expenses.length === 0) {
    return <p className="no-expenses">No expenses added yet.</p>;
  }

  return (
    <ul className="expense-list">
      {expenses.map(({ id, title, amount, date }) => (
        <li key={id} className="expense-item">
          <div className="expense-details">
            <h3>{title}</h3>
            <p>₹{amount.toFixed(2)}</p>
            <p>{new Date(date).toLocaleDateString()}</p>
          </div>
          <button
            className="delete-btn"
            onClick={() => onDelete(id)}
            aria-label={`Delete expense ${title}`}
          >
            &#10005;
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ExpenseList;
