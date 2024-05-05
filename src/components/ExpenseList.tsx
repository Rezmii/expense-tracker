import { ChangeEvent, useState } from "react";

interface Expense {
  description: string;
  amount: number;
  category: string;
}

interface Props {
  expenseList: Expense[];
}

const ExpenseList = ({ expenseList }: Props) => {
  const [category, setCategory] = useState("");

  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setCategory(event.target.value);
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
              ? expenseList.map((expense, index) => (
                  <tr key={index}>
                    <td>{expense.description}</td>
                    <td>{expense.amount}</td>
                    <td>{expense.category}</td>
                    <td>
                      <button>X</button>
                    </td>
                  </tr>
                ))
              : expenseList.map((expense, index) =>
                  expense.category === category ? (
                    <tr key={index}>
                      <td>{expense.description}</td>
                      <td>{expense.amount}</td>
                      <td>{expense.category}</td>
                      <td>
                        <button>X</button>
                      </td>
                    </tr>
                  ) : null
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
        <option value="groceries">Groceries</option>
        <option value="utilities">Utilities</option>
        <option value="entertainment">Entertainment</option>
      </select>
      {showTable()}
    </>
  );
};

export default ExpenseList;
