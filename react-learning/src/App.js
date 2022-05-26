import ExpenseList from "../src/components/Expenses/ExpenseList";
import expenses from "./components/Expenses/expenses";
import "../src/components/Expenses/Expenses.css";
import Card from "../src/components/UI/Card";
import NewExpense from "./components/NewExpense/NewExpense";
import {useState} from 'react';

function App() {
  const [userExpenses, setUserExpenses] = useState(expenses);

  const addExpenseHandler = (expense)=>{
    setUserExpenses((prevState)=>[expense,...prevState])
  }

  return (
    <Card className="expense-item">
      <NewExpense onAddExpense={addExpenseHandler} />
      <div className="expenses">
        <ExpenseList expenses={userExpenses} />
      </div>
    </Card>
  );
}

export default App;
