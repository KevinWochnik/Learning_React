import React from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import classes from "./AddUser.module.css";
import { useState } from "react";

const AddUser = (props) => {
  const [enteredUserName, setEnteredUserName] = useState("");
  const [enteredUserAge, setEnteredUserAge] = useState("");

  const addUserHandler = (e) => {
    e.preventDefault();

    if (enteredUserAge === 0 || enteredUserName.trim() === 0) {
      return;
    }
    if (Number(enteredUserAge) < 1) {
      return;
    }
    props.onAddUser(enteredUserName, enteredUserAge)
    setEnteredUserAge("");
    setEnteredUserName("");
  };

  const userNameChangeHandler = (e) => {
    setEnteredUserName(e.target.value);
  };
  const userAgeChangeHandler = (e) => {
    setEnteredUserAge(e.target.value);
  };

  return (
    <Card className={classes.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          onChange={userNameChangeHandler}
          value={enteredUserName}
        />
        <label htmlFor="age">Age (Years)</label>
        <input
          type="number"
          id="age"
          onChange={userAgeChangeHandler}
          value={enteredUserAge}
        />
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
};

export default AddUser;
