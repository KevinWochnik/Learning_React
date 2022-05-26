import ExpensesFilter from "../ExpenseFilter/ExpensesFilter";
import ExpenseItem from "./ExpenseItem";
import { useState } from "react";

const ExpenseList = ({ expenses }) => {
  const [filteredYear, setFilteredYear] = useState("2020");
  const filteredChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  return (
    <>
      <ExpensesFilter selected={filteredYear} onChangeFilter={filteredChangeHandler} />
      {expenses.map((item) => (
        <ExpenseItem title={item.title} amount={item.amount} date={item.date} />
      ))}
    </>
  );
};

export default ExpenseList;
