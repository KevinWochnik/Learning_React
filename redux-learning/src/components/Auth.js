import classes from "./Auth.module.css";
import { useDispatch } from "react-redux";
import { authActions } from "../store/authSlice";
import { useState } from "react";

const Auth = () => {
  const dispatch = useDispatch();

  const [formValues, setFormValues] = useState({
    login: "",
    password: "",
  });

  const setLogin = (e) => {
    setFormValues((prevState) => ({
      ...prevState,
      login: e.target.value,
    }));
  };
  const setPassword = (e) => {
    setFormValues((prevState) => ({
      ...prevState,
      password: e.target.value,
    }));
  };

  const formIsValid =
    formValues.login.length > 0 && formValues.password.length > 0;

  const loginHandler = (e) => {
    e.preventDefault();
    if (!formIsValid) return alert("please type in your login and password");
    dispatch(authActions.login());
  };

  return (
    <main className={classes.auth}>
      <section>
        <form>
          <div className={classes.control}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={formValues.login}
              onChange={setLogin}
            />
          </div>
          <div className={classes.control}>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={formValues.password}
              onChange={setPassword}
            />
          </div>
          <button onClick={loginHandler}>Login</button>
        </form>
      </section>
    </main>
  );
};

export default Auth;
