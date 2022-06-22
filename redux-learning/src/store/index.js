import { createSlice, configureStore } from "@reduxjs/toolkit";

// export const actionTypes = {
//   increment: "INCREMENT",
//   decrement: "DECREMENT",
//   increase: "INCREASE",
//   toggle: "TOGGLE",
// };

const initialState = {
  counter: 0,
  showCounter: false,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      state.counter = state.counter += action.payload;
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
  },
});

export const counterActions = counterSlice.actions;
export default store;

// const counterReducer = (state = initialState, action) => {
//   if (action.type === actionTypes.increment) {
//     return {
//       ...state,
//       counter: state.counter + 1,
//     };
//   }
//   if (action.type === actionTypes.increase) {
//     return {
//       ...state,
//       counter: state.counter + action.amount,
//     };
//   }
//   if (action.type === actionTypes.decrement) {
//     return {
//       ...state,
//       counter: state.counter - 1,
//     };
//   }
//   if (action.type === actionTypes.toggle) {
//     return {
//       ...state,
//       showCounter: !state.showCounter,
//     };
//   }
//   return state;
// };
