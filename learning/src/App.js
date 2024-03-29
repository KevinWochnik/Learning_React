import React from "react";
import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";
import { useState } from "react";

function App() {
  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (name, age)=>{
    setUsersList((prevState)=>{
      return [...prevState, {name, age}]
    });
  };

  return (
    <div>
      <AddUser onAddUser={addUserHandler}/>
      <UsersList users={usersList}/>
    </div>
  );
}

export default App;
