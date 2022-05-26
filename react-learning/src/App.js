import ExpenseList from "../src/components/Expenses/ExpenseList";
import expenses from "./components/Expenses/expenses";
import "../src/components/Expenses/Expenses.css";
import Card from "../src/components/UI/Card";
import NewExpense from "./components/NewExpense/NewExpense";
import ExpensesFilter from "./components/ExpenseFilter/ExpensesFilter";
import { useState } from "react";

function App() {
  const onAddExpense = (data) => {
    console.log(data);
  };

  return (
    <Card className="expense-item">
      <NewExpense onAddExpense={onAddExpense} />
      <div className="expenses">
        <ExpenseList expenses={expenses} />
      </div>
    </Card>
  );
}

export default App;
