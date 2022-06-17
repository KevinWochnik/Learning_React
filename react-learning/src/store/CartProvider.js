import { useReducer } from "react";
import CartContext from "./cart-context";

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const types = {
  add: "ADD",
  remove: "REMOVE",
};

const cartReducer = (state, action) => {
  if (action.type === types.add) {
    const updatedItems = state.items.concat(action.item);
    const updatedTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;
    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }
  if (action.type === types.remove) {
  }
  return defaultCartState;
};

const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  const addItemToCartHandler = (item) => {
    dispatchCartAction({ type: types.add, item });
  };
  const removeItemFromCartHandler = (id) => {
    dispatchCartAction({ type: types.remove, id });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};
export default CartProvider;
