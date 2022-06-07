import CartIcon from "../../Cart/CartIcon/CartIcon";
import classes from "./HeaderCartButton.module.css";
import { useContext } from "react";
import CartContext from "../../../store/cart-context";

const HeaderCartButton = (props) => {

  const cartCtx = useContext(CartContext);
  const numberOfCardItems = cartCtx.items.reduce((currentNumber, item)=>{
    return currentNumber + item.amount
  },0)

  return (
    <button className={classes.button} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>YourCart</span>
      <span className={classes.badge}>{numberOfCardItems}</span>
    </button>
  );
};
export default HeaderCartButton;
