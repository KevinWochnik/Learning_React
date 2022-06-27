import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  totalQuantity: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, { payload: { id, name, price, quantity } }) {
      const addedItem = {
        id,
        title: name,
        price,
        quantity,
      };
      const isExistingItem = state.items.find(
        (item) => item.id === addedItem.id
      );
      if (isExistingItem) {
        state.items[isExistingItem].quantity++;
      } else {
        state.items.push(addedItem)
      }
    },
    removeFromCart() {},
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice;
