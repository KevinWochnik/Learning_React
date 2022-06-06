import classes from "./Input.module.css";

const Input = ({ label, input, id }) => {
  return (
    <div className={classes.input}>
      <label htmlFor={id}>{label}</label>
      <input {...input} />
    </div>
  );
};
export default Input;
