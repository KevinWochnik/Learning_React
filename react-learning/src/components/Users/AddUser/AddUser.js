import { Wrapper } from "./AddUser.styles";
import Button from "../../UI/Button/Button";
import { useState } from "react";
const AddUser = (props) => {
  const [enteredUserName, setEnteredUserName] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const addUserHandler = (e) => {
    e.preventDefault();

    if (
      enteredAge.trim().length === 0 ||
      Number(enteredAge) < 0 ||
      enteredUserName.trim().length === 0
    ) {
      return alert("cos");
    }

    setEnteredAge("");
    setEnteredUserName("");
  };
  const usernameChangeHandler = (e) => {
    setEnteredUserName(e.target.value);
  };
  const ageChangeHandler = (e) => {
    setEnteredAge(e.target.value);
  };

  return (
    <Wrapper>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          onChange={usernameChangeHandler}
          value={enteredUserName}
        />
        <label htmlFor="age">Age (years)</label>
        <input
          type="number"
          id="age"
          onChange={ageChangeHandler}
          value={enteredAge}
        />
        <Button type="submit">Add User</Button>
      </form>
    </Wrapper>
  );
};
export default AddUser;
