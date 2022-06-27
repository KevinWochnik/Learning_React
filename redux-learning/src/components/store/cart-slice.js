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
      state.totalQuantity++;

      const addedItem = {
        id,
        title: name,
        price,
        quantity,
      };

      const existingItemIndex = state.items.findIndex(
        (item) => item.id === addedItem.id
      );
      if (existingItemIndex !== -1) {
        state.items[existingItemIndex].quantity++;
      } else {
        state.items.push(addedItem);
      }
    },

    removeFromCart(state, action) {
      state.totalQuantity--;

      const existingItemIndex = state.items.findIndex(
        (item) => item.id === action.payload
      );
      const existingItem = state.items[existingItemIndex];
      existingItem.quantity--;

      if (existingItem.quantity === 0) {
        const newArray = state.items.filter((item) => item.quantity !== 0);
        state.items = newArray;
      }
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice;
