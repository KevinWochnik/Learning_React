import { createStore } from "redux";

export const actionTypes = {
  increment: "INCREMENT",
  decrement: "DECREMENT",
  increase: "INCREASE",
  toggle: "TOGGLE",
};

const initialState = {
  counter: 0,
  showCounter: false,
};

const counterReducer = (state = initialState, action) => {
  if (action.type === actionTypes.increment) {
    return {
      ...state,
      counter: state.counter + 1,
    };
  }
  if (action.type === actionTypes.increase) {
    return {
      ...state,
      counter: state.counter + action.amount,
    };
  }
  if (action.type === actionTypes.decrement) {
    return {
      ...state,
      counter: state.counter - 1,
    };
  }
  if (action.type === actionTypes.toggle) {
    return {
      ...state,
      showCounter: !state.showCounter,
    };
  }
  return state;
};

const store = createStore(counterReducer);

export default store;
