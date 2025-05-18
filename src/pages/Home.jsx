// src/pages/Home.jsx
import React, { useState } from 'react';
import ExpenseForm from '../components/ExpenseForm';
import ExpenseList from '../components/ExpenseList';
import '../styles/Home.css';

const Home = () => {
  const [expenses, setExpenses] = useState([]);
  const [titleFilter, setTitleFilter] = useState('');
  const [dateFilter, setDateFilter] = useState('');

  const handleAddExpense = (expense) => {
    setExpenses([expense, ...expenses]);
  };

  const handleDeleteExpense = (expenseId) => {
    const updatedExpenses = expenses.filter(exp => exp.id !== expenseId);
    setExpenses(updatedExpenses);
  };

  // Apply both title and date filters
  const filteredExpenses = expenses.filter(expense => {
    const matchesTitle = expense.title.toLowerCase().includes(titleFilter.toLowerCase());
    const matchesDate = !dateFilter || expense.date === dateFilter;
    return matchesTitle && matchesDate;
  });

  const totalExpense = filteredExpenses.reduce((sum, expense) => sum + expense.amount, 0);

  return (
    <div className="home-container">
      <h1>Expense Tracker</h1>
      <p className="tagline">Keep track of your expenses and stay financially healthy.</p>

      <input 
        type="text" 
        placeholder="Filter by title" 
        value={titleFilter} 
        onChange={(e) => setTitleFilter(e.target.value)} 
        className="filter-input"
      />

      <input 
        type="date" 
        value={dateFilter} 
        onChange={(e) => setDateFilter(e.target.value)} 
        className="date-filter-input"
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
