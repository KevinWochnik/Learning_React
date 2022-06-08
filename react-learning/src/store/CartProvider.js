import CartContext from "./cart-context";
import { useReducer } from "react";

const types = {
  add: "ADD",
  remove: "REMOVE",
};

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  if (action.type === types.add) {
    const updatedTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;
      const existingCartItemIndex = state.items.findIndex(item=>item.id===action.item.id);
      const existingCartItem = state.items[existingCartItemIndex];
      let updatedItem;
      let updatedItems;
      if(existingCartItem){
        updatedItem = {
          ...existingCartItem,
          amount: existingCartItem.amount + action.item.amount
        }
        updatedItems = state.items.concat(action.item)
      }
    const updatedItems = state.items.concat(action.item);
    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    }

  }
  return defaultCartState;
};

const CartProvider = (props) => {
  const [cartState, dispatchCartState] = useReducer(
    cartReducer,
    defaultCartState
  );

  const addItemToCartHandler = (item) => {
    dispatchCartState({ type: types.add, item });
  };
  const removeItemFromCartHandler = (id) => {
    dispatchCartState({ type: types.remove, id });
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
