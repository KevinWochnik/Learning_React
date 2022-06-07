import React from "react";
import classes from "./Input.module.css";

const Input = React.forwardRef(({ label, input, id }, ref) => {
  return (
    <div className={classes.input}>
      <label htmlFor={id}>{label}</label>
      <input ref={ref} {...input} />
    </div>
  );
});
export default Input;
