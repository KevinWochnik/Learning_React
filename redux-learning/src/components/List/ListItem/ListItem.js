import { ListItemWrapper } from "./ListItem.styles";
import { useDispatch } from "react-redux/es/exports";
import { cartActions } from "../../store/cart-slice";

const DUMMY_DATA = [
  {
    id: "p1",
    name: "new pc",
    price: 5.0,
    quantity: 1,
    description: "this is a new pc with intel core",
  },
  {
    id: "p2",
    name: "old book",
    price: 2.0,
    quantity: 1,
    description: "this is an old harry potter book",
  },
];

const ListItem = () => {
  const dispatch = useDispatch();
  const addItemToCart = (item) => {
    dispatch(cartActions.addToCart(item));
  };

  const mappedData = DUMMY_DATA.map((item) => (
    <ListItemWrapper key={item.id} id={item.id}>
      <h1>{item.name}</h1>
      <h2>${item.price.toFixed(2)}</h2>
      <h3>{item.description}</h3>
      <button onClick={addItemToCart.bind(null, item)}>Add to cart</button>
    </ListItemWrapper>
  ));

  return <>{mappedData}</>;
};

export default ListItem;
