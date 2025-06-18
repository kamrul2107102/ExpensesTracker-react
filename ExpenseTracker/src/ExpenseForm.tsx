import { useState } from 'react';
import { categories } from './App';

interface Expense {
  description: string;
  amount: number;
  category: string;
}

interface Props {
  onSubmit: (expense: Expense) => void; // Update to accept an object
}

const ExpenseForm = ({ onSubmit }: Props) => {
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('');
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const validate = () => {
    const newErrors: { [key: string]: string } = {};
    if (!description.trim()) newErrors.description = 'Description is required.';
    if (!amount || parseFloat(amount) <= 0) newErrors.amount = 'Amount must be greater than 0.';
    if (!category) newErrors.category = 'Category is required.';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    // Pass an object with description, amount, and category to onSubmit
    onSubmit({
      description,
      amount: parseFloat(amount),
      category,
    });

    // Clear the form after submission
    setDescription('');
    setAmount('');
    setCategory('');
    setErrors({});
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="description" className="form-label">Description</label>
        <input
          type="text"
          className={`form-control ${errors.description ? 'is-invalid' : ''}`}
          id="description"
          placeholder="Enter expense description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        {errors.description && <div className="invalid-feedback">{errors.description}</div>}
      </div>
      <div className="mb-3">
        <label htmlFor="amount" className="form-label">Amount</label>
        <input
          type="number"
          className={`form-control ${errors.amount ? 'is-invalid' : ''}`}
          id="amount"
          placeholder="Enter amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        {errors.amount && <div className="invalid-feedback">{errors.amount}</div>}
      </div>
      <div className="mb-3">
        <label htmlFor="category" className="form-label">Category</label>
        <select
          className={`form-select ${errors.category ? 'is-invalid' : ''}`}
          id="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="" disabled>Select Category</option>
          {categories.map((category) => (
            <option key={category} value={category}>{category}</option>
          ))}
        </select>
        {errors.category && <div className="invalid-feedback">{errors.category}</div>}
      </div>
      <button type="submit" className="btn btn-primary">Add Expense</button>
    </form>
  );
};

export default ExpenseForm;