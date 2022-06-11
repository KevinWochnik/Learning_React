import react from "react";
import { ListItemWrapper } from "./ListItem.styles";

const ListItem = ({ meal: { id, label, price } }) => {
  return (
    <ListItemWrapper key={id}>
      <div>
        <p>{label}</p>
        <span>{`$${price.toFixed(2)}`}</span>
      </div>
      <form>
        <label htmlFor={id}>Amount</label>
        <input type="number" name={id} />
        <button type="submit">+ Add</button>
      </form>
    </ListItemWrapper>
  );
};
export default ListItem;
