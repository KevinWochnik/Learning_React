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

      
      if(state.items === undefined){
        state.items = [];
      }

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

      
      if(state.items === undefined){
        state.items = [];
      }
      const existingItemIndex = state.items.findIndex(
        (item) => item.id === action.payload
      );
      const existingItem = state.items[existingItemIndex];
      existingItem.quantity--;

      if (existingItem.quantity === 0) {
        let newArray = state.items.filter((item) => item.quantity !== 0);
        if(newArray.length===0){
          newArray = []
        }
        state.items = newArray;
      }
    },
    replaceCart(state, action) {
      state.totalQuantity = action.payload.totalQuantity;
      state.items = action.payload.items;
    },

  },
});

export const cartActions = cartSlice.actions;
export default cartSlice;
