import { useState } from 'react';
import './App.css';
import ExpenseList from './ExpenseList';
import ExpenseFinter from './ExpenseFinter';
import ExpenseForm from './ExpenseForm';

export const categories = ['Food', 'Utilities', 'Health'];

function App() {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [expenses, setExpenses] = useState([
    { id: 1, description: 'Groceries', amount: 50.0, category: 'Food' },
    { id: 2, description: 'Electricity Bill', amount: 75.0, category: 'Utilities' },
    { id: 3, description: 'Gym Membership', amount: 30.0, category: 'Health' },
  ]);

  const onDelete = (id: number) => {
    setExpenses(expenses.filter((expense) => expense.id !== id));
  };

  const filteredExpenses = selectedCategory
    ? expenses.filter((expense) => expense.category === selectedCategory)
    : expenses;

  if (expenses.length === 0) return <p>No expenses available.</p>;
  if (filteredExpenses.length === 0) return <p>No expenses found for the selected category.</p>;

  return (
    <>
        <div className="app-container">


      <h1>$ Expense Tracker $</h1>
      <div className="mb-5">
        <ExpenseForm
          onSubmit={(expense) =>
            setExpenses([...expenses, { ...expense, id: expenses.length + 1 }])
          }
        />
      </div>
      <div className="mb-3">
        <ExpenseFinter onFilterChange={(category) => setSelectedCategory(category)} />
      </div>
      <ExpenseList expenses={filteredExpenses} onDelete={onDelete} />
      </div>
    </>

  );
}

export default App;