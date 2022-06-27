import CartItem from "../CartItem/CartItem";
import { CartWrapper } from "./Cart.styles";
import { useSelector } from "react-redux/es/exports";

const Cart = () => {
  const cartIsShown = useSelector((state) => state.ui.isShown);
  const isEmpty = useSelector(state=>state.cart.items.length === 0);

  const titleText = isEmpty ? 'Your cart is empty' : 'Your cart'

  return (
    <CartWrapper>
      {cartIsShown ? <p>{titleText}</p> : <p>Show your cart</p>}
      <ul>{cartIsShown && <CartItem />}</ul>
    </CartWrapper>
  );
};

export default Cart;
