import { createStore } from "redux";

const actionTypes = {
  increment: "INCREMENT",
  decrement: "DECREMENT",
};

const counterReducer = (state = { counter: 0 }, action) => {
  if (action.type === actionTypes.increment) {
    return {
      counter: state.counter + 1,
    };
  }
  if (action.type === actionTypes.decrement) {
    return {
      counter: state.counter - 1,
    };
  }
  return state;
};

const store = createStore(counterReducer);

export default store;

