import CartItem from "../CartItem/CartItem";
import { CartWrapper } from "./Cart.styles";
import { useSelector } from "react-redux";

const Cart = () => {
  const cartIsShown = useSelector((state) => state.ui.isShown);

  return (
    <CartWrapper>
      <p data-testid="para">Show your cart</p>
      <ul>{cartIsShown && <CartItem />}</ul>
    </CartWrapper>
  );
};

export default Cart;
