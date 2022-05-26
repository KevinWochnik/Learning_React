import ExpensesFilter from "../ExpenseFilter/ExpensesFilter";
import { useState } from "react";
import ExpensesList from "./ExpensesList";

const ExpenseList = ({ expenses }) => {
  const [filteredYear, setFilteredYear] = useState("2020");
  const filteredChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  const filteredExpenses = expenses.filter(
    (item) => item.date.getFullYear() === Number(filteredYear)
  );

  return (
    <>
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filteredChangeHandler}
      />
      <ExpensesList items={filteredExpenses} />
    </>
  );
};

export default ExpenseList;
