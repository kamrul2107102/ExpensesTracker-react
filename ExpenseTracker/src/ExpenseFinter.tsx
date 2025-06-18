
interface ExpenseFilterProps {
    onFilterChange: (category: string) => void;
}


const ExpenseFinter = ({onFilterChange}: ExpenseFilterProps) => {

  return (
    <select className="form-select" aria-label="Default select example" onChange={(e) => onFilterChange(e.target.value)}>
    <option value="" disabled selected>All Catergory</option>
      <option value="">All Categories</option>
        <option value="Food">Food</option>  
        <option value="Utilities"> Utilities    </option>
        <option value="Health">Health</option>


    </select>
  )
}

export default ExpenseFinter