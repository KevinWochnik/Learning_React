import CartItem from "../CartItem/CartItem";
import { CartWrapper } from "./Cart.styles";
import { useSelector } from "react-redux/es/exports";

const Cart = () => {
  const cartIsShown = useSelector((state) => state.ui.isShown);


  return (
    <CartWrapper>
      <p>Show your cart</p>
      <ul>{cartIsShown && <CartItem />}</ul>
    </CartWrapper>
  );
};

export default Cart;
