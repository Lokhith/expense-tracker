// src/components/ExpenseForm.jsx
import React, { useState } from 'react';
import '../styles/ExpenseForm.css';

const ExpenseForm = ({ onAddExpense }) => {
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !amount || !date) {
      alert('Please fill in all fields');
      return;
    }

    const newExpense = {
      id: Date.now(),
      title,
      amount: parseFloat(amount),
      date: new Date(date).toISOString().split('T')[0],
    };

    onAddExpense(newExpense);
    setTitle('');
    setAmount('');
    setDate('');
  };

  return (
    <form className="expense-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label>Title</label>
        <input 
          type="text" 
          value={title} 
          onChange={(e) => setTitle(e.target.value)} 
          placeholder="Expense title" 
        />
      </div>
      
      <div className="form-group">
        <label>Amount</label>
        <input 
          type="number" 
          value={amount} 
          onChange={(e) => setAmount(e.target.value)} 
          placeholder="Expense amount" 
        />
      </div>
      
      <div className="form-group">
        <label>Date</label>
        <input 
          type="date" 
          value={date} 
          onChange={(e) => setDate(e.target.value)} 
        />
      </div>

      <button type="submit">Add Expense</button>
    </form>
  );
};

export default ExpenseForm;
