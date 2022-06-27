import { CartItemWrapper } from "./CartItem.styles";
import { useSelector, useDispatch } from "react-redux";
import { cartActions } from "../../store/cart-slice";

const CartItem = () => {
  const items = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const mappedItems = items.map((item) => {
    const totalPrice = item.price * item.quantity;

    const addItemQuantity = (item)=>{
      dispatch(cartActions.addToCart(item))
    } 
    const removeItemQuantity = (id)=>{
      dispatch(cartActions.removeFromCart(id))
    }

    return (
      <CartItemWrapper>
        <h1>{item.title}</h1>
        <h2>${totalPrice.toFixed(2)}</h2>
        <h3>(${item.price.toFixed(2)}/item)</h3>
        <h1>x{item.quantity}</h1>
        <button onClick={addItemQuantity.bind(null, item)}>+</button>
        <button onClick={removeItemQuantity.bind(null, item.id)}>-</button>
      </CartItemWrapper>
    );
  });
  return mappedItems;
};

export default CartItem;
