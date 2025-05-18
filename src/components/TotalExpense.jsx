import React from 'react';
import '../styles/TotalExpense.css';

const TotalExpense = ({ total }) => {
  return (
    <div className="total-expense">
      Total Expense: ₹{total.toFixed(2)}
    </div>
  );
};

export default TotalExpense;
