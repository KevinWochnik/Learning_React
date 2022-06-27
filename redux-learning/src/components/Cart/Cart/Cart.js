import CartItem from "../CartItem/CartItem";
import { CartWrapper } from "./Cart.styles";

const Cart = () => {
  return (
    <CartWrapper>
      <p>Your cart</p>
      <ul>
        <CartItem />
      </ul>
    </CartWrapper>
  );
};

export default Cart;
