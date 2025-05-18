import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import ExpenseForm from './components/ExpenseForm';
import ExpenseList from './components/ExpenseList';
import TotalExpense from './components/TotalExpense';
import About from './components/About';
import './styles/App.css';

const App = () => {
  const [expenses, setExpenses] = useState([]);

  const handleAddExpense = (expense) => {
    setExpenses(prev => [expense, ...prev]);
  };

  const handleDeleteExpense = (id) => {
    setExpenses(prev => prev.filter(exp => exp.id !== id));
  };

  const totalAmount = expenses.reduce((sum, item) => sum + item.amount, 0);

  return (
    <>
      <Header />
      <main className="container">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <h2 className="filter-heading">Add New Expense</h2>
                <ExpenseForm onAddExpense={handleAddExpense} />
                <ExpenseList expenses={expenses} onDelete={handleDeleteExpense} />
                <TotalExpense total={totalAmount} />
              </>
            }
          />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
    </>
  );
};

export default App;
