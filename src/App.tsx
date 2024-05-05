import { useState } from "react";
import Form from "./components/Form";
import ExpenseList from "./components/ExpenseList";

interface Expense {
  description: string;
  amount: number;
  category: string;
}

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

  const handleDataFromForm = (data: Expense) => {
    setExpenseList([...expenseList, data]);
    console.log(expenseList);
  };

  return (
    <>
      {console.log(expenseList)}
      <Form sendData={handleDataFromForm}></Form>
      <ExpenseList expenseList={expenseList}></ExpenseList>
    </>
  );
}

export default App;
