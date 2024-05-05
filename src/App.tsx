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
  ]);
  return (
    <>
      <Form></Form>
      <ExpenseList expenseList={expenseList}></ExpenseList>
    </>
  );
}

export default App;
