import { CartItemWrapper } from "./CartItem.styles";
import { useSelector } from "react-redux";



const CartItem = () => {
  const items = useSelector(state=>state.cart.items);
  const mappedItems = items.map((item) => (
    <CartItemWrapper>
      <h1>{item.title}</h1>
      <h2>${item.totalPrice.toFixed(2)}</h2>
      <h3>(${item.price.toFixed(2)}/item)</h3>
      <h1>x{item.quantity}</h1>
      <button>+</button>
      <button>-</button>
    </CartItemWrapper>
  ));
  return mappedItems;
};

export default CartItem;
