import { Wrapper } from "./UsersList.styles";
const UsersList = ({ users }) => {
  return (
    <Wrapper>
      <ul>
        {users.map((user) => (
          <li>
            {user.name} ({user.age} years old)
          </li>
        ))}
      </ul>
    </Wrapper>
  );
};

export default UsersList;