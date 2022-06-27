import ListItem from "../ListItem/ListItem";
import { ListWrapper } from "./List.styles";

const List = () => {
  return (
    <ListWrapper>
      <p>Choose your products</p>
      <ul>
        <ListItem />
      </ul>
    </ListWrapper>
  );
};
export default List;
