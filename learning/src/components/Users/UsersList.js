import React from "react";
import Card from "../UI/Card";
import classes from "./UsersList.module.css";

const UsersList = (props) => {
  return (
    <Card className={classes.users}>
      {props.users.map((item) => (
        <li key={Math.random()}>
          {item.name+' '}({item.age+' '}years old)
        </li>
      ))}
    </Card>
  );
};
export default UsersList;
