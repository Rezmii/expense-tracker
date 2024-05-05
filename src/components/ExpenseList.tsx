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
        {expenseList.map((expense, index) => renderTableRow(expense, index))}
      </tbody>
      <tfoot>
        <tr>
          <td>Total</td>
          <td>
            {expenseList.reduce((acc, expense) => expense.amount + acc, 0)}
          </td>
        </tr>
      </tfoot>
    </table>
  );
};

export default ExpenseList;
