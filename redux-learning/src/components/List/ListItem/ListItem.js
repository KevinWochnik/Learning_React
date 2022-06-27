import { ListItemWrapper } from "./ListItem.styles";

const ListItem = () => {
  return (
    <ListItemWrapper>
      <h1>new pc</h1>
      <h2>$15.00</h2>
      <h3>Intel Core i7, RTX 3060</h3>
      <button>Add to cart</button>
    </ListItemWrapper>
  );
};

export default ListItem;