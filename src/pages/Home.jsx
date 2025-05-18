// src/pages/Home.jsx
import React, { useState } from 'react';
import ExpenseForm from '../components/ExpenseForm';
import ExpenseList from '../components/ExpenseList';
import '../styles/Home.css';

const Home = () => {
  const [expenses, setExpenses] = useState([]);
  const [filter, setFilter] = useState('');

  const handleAddExpense = (expense) => {
    setExpenses([expense, ...expenses]);
  };

  const handleDeleteExpense = (expenseId) => {
    const updatedExpenses = expenses.filter(exp => exp.id !== expenseId);
    setExpenses(updatedExpenses);
  };

  const filteredExpenses = expenses.filter(expense =>
    expense.title.toLowerCase().includes(filter.toLowerCase())
  );

  const totalExpense = filteredExpenses.reduce((sum, expense) => sum + expense.amount, 0);

  return (
    <div className="home-container">
      <h1>Expense Tracker</h1>
      <p className="tagline">Keep track of your expenses and stay financially healthy.</p>

      <input 
        type="text" 
        placeholder="Filter by title" 
        value={filter} 
        onChange={(e) => setFilter(e.target.value)} 
        className="filter-input"
      />

      <ExpenseForm onAddExpense={handleAddExpense} />
      <ExpenseList expenses={filteredExpenses} onDeleteExpense={handleDeleteExpense} />

      <div className="total-expense">
        <h2>Total Expense: ₹{totalExpense.toLocaleString('en-IN')}</h2>
      </div>
    </div>
  );
};

export default Home;
