import { Wrapper } from "./AddUser.styles";
import Button from "../../UI/Button/Button";
import { useState } from "react";
import ErrorModal from "../../UI/ErrorModal/ErrorModal";
const AddUser = ({ onAddUser }) => {
  const [enteredUserName, setEnteredUserName] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [error, setError] = useState();

  const addUserHandler = (e) => {
    e.preventDefault();

    if (enteredAge.trim().length === 0 || enteredUserName.trim().length === 0) {
      setError({
        title: "Invalid input",
        message: "Please insert a valid name and age",
      });
      return;
    } else if (Number(enteredAge) < 0) {
      setError({
        title: "Invalid input",
        message: "Please insert a valid age greater than 0",
      });
    }
    onAddUser(enteredAge, enteredUserName);

    setEnteredAge("");
    setEnteredUserName("");
  };
  const usernameChangeHandler = (e) => {
    setEnteredUserName(e.target.value);
  };
  const ageChangeHandler = (e) => {
    setEnteredAge(e.target.value);
  };

  const errorHandler = ()=>{
    setError(null)
  }
  return (
    <>
      {error && <ErrorModal title={error.title} message={error.message} onError={errorHandler}/>}
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
    </>
  );
};
export default AddUser;
