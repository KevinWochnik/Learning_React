import { Wrapper } from "./AddUser.styles";
import Button from "../../UI/Button/Button";
import { useState, useRef } from "react";
import ErrorModal from "../../UI/ErrorModal/ErrorModal";
const AddUser = ({ onAddUser }) => {
  const nameInputRef = useRef();
  const ageInputRef = useRef();

  const [error, setError] = useState();

  const addUserHandler = (e) => {
    e.preventDefault();

    const entName = nameInputRef.current.value;
    const entAge = ageInputRef.current.value;

    if (entAge.trim().length === 0 || entName.trim().length === 0) {
      setError({
        title: "Invalid input",
        message: "Please insert a valid name and age",
      });
      return;
    } else if (Number(entAge) < 0) {
      setError({
        title: "Invalid input",
        message: "Please insert a valid age greater than 0",
      });
    }
    onAddUser(entAge, entName);
    nameInputRef.current.value = "";
    ageInputRef.current.value = "";
  };

  const errorHandler = () => {
    setError(null);
  };
  return (
    <>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onError={errorHandler}
        />
      )}
      <Wrapper>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input type="text" id="username" ref={nameInputRef} />
          <label htmlFor="age">Age (years)</label>
          <input type="number" id="age" ref={ageInputRef} />
          <Button type="submit">Add User</Button>
        </form>
      </Wrapper>
    </>
  );
};
export default AddUser;
