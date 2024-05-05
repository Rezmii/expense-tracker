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
      description: "Eggs",
      amount: 4,
      category: "Groceries",
    },
    {
      description: "Bread",
      amount: 2.3,
      category: "Groceries",
    },
    {
      description: "Water Bill",
      amount: 20,
      category: "Utilities",
    },
    {
      description: "Cinema",
      amount: 32,
      category: "Entertainment",
    },
  ]);

  const handleDataFromForm = (data: Expense) => {
    setExpenseList([...expenseList, data]);
    console.log(expenseList);
  };

  //const handleDataRemove = (data) => {};

  return (
    <>
      {console.log(expenseList)}
      <Form sendData={handleDataFromForm}></Form>
      <ExpenseList
        expenseList={expenseList}
        onRemove={(index) => {
          setExpenseList(
            expenseList.filter((expense, indexOfArr) => indexOfArr !== index)
          );
        }}
      ></ExpenseList>
    </>
  );
}

export default App;
