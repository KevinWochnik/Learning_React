import MealDetails from "../../MealDetails/MealDetails";
import ListForm from "../ListForm/ListForm";
import { ListItemWrapper } from "./ListItem.styles";

const ListItem = ({ meal: { id, label, price } }) => {
  return (
    <ListItemWrapper key={id}>
      <MealDetails label={label} price={price} />
      <ListForm id={id} type="number" />
    </ListItemWrapper>
  );
};
export default ListItem;
