
interface Expense {
  id: number;
  description: string;
  amount: number;
  category: string;
}

interface Props {
  expenses: Expense[];
  onDelete: (id: number) => void;
}

function ExpenseList(props: Props) {
    const { expenses, onDelete } = props;

    return (
<div className="table-wrapper">
<table className="expense-list">
            <thead>
                <tr>
                    <th>Description</th>
                    <th>Amount</th>
                    <th>Category</th>
                </tr>
            </thead>
            <tbody>
                {expenses.map((expense) => (
                    <tr key={expense.id}>
                        <td>{expense.description}</td>
                        <td>${expense.amount.toFixed(2)}</td>
                        <td>{expense.category}</td>
                        
                        <td>
                            <button className="btn1" onClick={() => onDelete(expense.id)}>
                                Delete
                            </button>
                        </td>
                    </tr>
                    
                ))}
            </tbody>
            <tfoot>
    
    <tr>
        <td colSpan={4} className="total-expense">
            Total Expense: ${expenses.reduce((total, expense) => total + expense.amount, 0).toFixed(2)}
        </td>
    </tr>
</tfoot>
        </table>
</div>
    );
}

export default ExpenseList;
