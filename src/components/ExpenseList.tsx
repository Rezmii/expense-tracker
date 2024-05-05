import { ChangeEvent, useState } from "react";

interface Expense {
  description: string;
  amount: number;
  category: string;
}

interface Props {
  expenseList: Expense[];
  onRemove: (index: Number) => void;
}

const ExpenseList = ({ expenseList, onRemove }: Props) => {
  const [category, setCategory] = useState("");

  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setCategory(event.target.value);
  };

  const renderTableRow = (expense: Expense, index: number) => {
    return (
      <tr key={index}>
        <td>{expense.description}</td>
        <td>
          {expense.amount.toString().includes(".")
            ? expense.amount.toFixed(2)
            : expense.amount}
        </td>
        <td>{expense.category}</td>
        <td>
          <button
            className="btn btn-danger"
            onClick={() => {
              onRemove(index);
            }}
          >
            X
          </button>
        </td>
      </tr>
    );
  };

  const showTable = () => {
    if (category !== "")
      return (
        <table className="table table-hover">
          <thead>
            <tr>
              <th>Description</th>
              <th>Amount</th>
              <th>Category</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {category === "all"
              ? expenseList.map((expense, index) =>
                  renderTableRow(expense, index)
                )
              : expenseList.map((expense, index) =>
                  expense.category === category
                    ? renderTableRow(expense, index)
                    : null
                )}
          </tbody>
        </table>
      );
  };

  return (
    <>
      <select
        className="form-select"
        id="category"
        value={category}
        onChange={handleChange}
      >
        <option value=""></option>
        <option value="all">All</option>
        <option value="Groceries">Groceries</option>
        <option value="Utilities">Utilities</option>
        <option value="Entertainment">Entertainment</option>
      </select>
      {showTable()}
    </>
  );
};

export default ExpenseList;
