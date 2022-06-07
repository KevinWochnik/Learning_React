import { useContext } from "react";
import { ProgressPlugin } from "webpack";
import CartContext from "../../../store/cart-context";
import MealItemForm from "../MealItemForm/MealItemForm";
import classes from "./MealItem.module.css";

const MealItem = ({ name, description, price, id }) => {
  const ctx = useContext(CartContext);

  const priceWithDollarSign = `$${price.toFixed(2)}`;

  const addToCartHandler = (amount) => {
    ctx.addItem({
      id,
      name,
      amount,
      price,
    });
  };

  return (
    <li className={classes.meal}>
      <div>
        <h3>{name}</h3>
        <div className={classes.description}>{description}</div>
        <div className={classes.price}>{priceWithDollarSign}</div>
      </div>
      <div>
        <MealItemForm id={id} onAddToCart={addToCartHandler} />
      </div>
    </li>
  );
};

export default MealItem;
