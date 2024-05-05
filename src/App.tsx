import { useState } from "react";
import Form from "./components/Form";
import ExpenseList from "./components/ExpenseList";

function App() {
  const [expenseList, setExpenseList] = useState([
    {
      description: "test",
      amount: 2,
      category: "groceries",
    },
    {
      description: "test1",
      amount: 4,
      category: "groceries",
    },
    {
      description: "test2",
      amount: 5,
      category: "utilities",
    },
    {
      description: "test3",
      amount: 15,
      category: "entertainment",
    },
  ]);
  return (
    <>
      <Form></Form>
      <ExpenseList expenseList={expenseList}></ExpenseList>
    </>
  );
}

export default App;
