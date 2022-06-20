import { useReducer } from "react";

const initialInputState = {
  value: "",
  isTouched: false,
};

const actionTypes = {
  input: "INPUT",
  blur: "BLUR",
  reset: "RESET",
};

const inputStateReducer = (state, action) => {
  if (action.type === actionTypes.input) {
    return { value: action.value, isTouched: state.isTouched };
  }
  if (action.type === actionTypes.blur) {
    return { isTouched: true, value: state.value };
  }
  if (action.type === actionTypes.reset) {
    return { value: "", isTouched: false };
  }
  return initialInputState;
};

const useInput = (validateValue) => {
  const [inputState, dispatchInputState] = useReducer(
    inputStateReducer,
    initialInputState
  );

  const valueIsValid = validateValue(inputState.value);
  const hasError = !valueIsValid && inputState.isTouched;

  const valueChangeHandler = (e) => {
    dispatchInputState({ type: actionTypes.input, value: e.target.value });
  };
  const inputBlurHandler = (e) => {
    dispatchInputState({ type: actionTypes.blur });
  };
  const reset = () => {
    dispatchInputState({ type: actionTypes.reset });
  };

  return {
    value: inputState.value,
    isValid: valueIsValid,
    hasError,
    valueChangeHandler,
    inputBlurHandler,
    reset,
  };
};
export default useInput;
