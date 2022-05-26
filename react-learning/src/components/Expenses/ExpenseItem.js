import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";

const ExpenseItem = ({ title, amount, date }) => {
  return (
    <li>
      <div className="expense-item">
        <div>
          <ExpenseDate date={date} />
        </div>
        <div className="expense-item__description">
          <h2>{title}</h2>
          <div className="expense-item__price">${amount}</div>
        </div>
      </div>
    </li>
  );
};

export default ExpenseItem;
