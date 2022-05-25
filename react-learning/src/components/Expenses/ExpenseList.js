import ExpenseItem from "./ExpenseItem";


const ExpenseList = ({ expenses }) => {
  return expenses.map((item) => (
    <ExpenseItem title={item.title} amount={item.amount} date={item.date} />
  ));
};

export default ExpenseList;
