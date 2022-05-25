import ExpenseList from "../src/components/Expenses/ExpenseList";
import expenses from "./components/Expenses/expenses";
import '../src/components/Expenses/Expenses.css'
import Card from "../src/components/UI/Card";

function App() {
  return (
    <Card className="expense-item">
      <h2>Let's get started!</h2>
      <div className="expenses">
        <ExpenseList expenses={expenses} />
      </div>
    </Card>
  );
}

export default App;
