import { HeaderButtonWrapper } from "./HeaderButton.styles";
import { uiActions } from "../../store/ui-slice";
import { useDispatch, useSelector } from "react-redux";

const HeaderButton = () => {
  const dispatch = useDispatch();
  const cartIsShown = useSelector((state) => state.ui.isShown);
  const totalQuantity = useSelector(state=>state.cart.totalQuantity)

  const toggleShowCart = () => {
    dispatch(uiActions.toggle());
  };

  return (
    <HeaderButtonWrapper onClick={toggleShowCart}>
      <h1>{cartIsShown ? "hide cart" : "show cart"}</h1>
      <div>
        <p>{totalQuantity}</p>
      </div>
    </HeaderButtonWrapper>
  );
};

export default HeaderButton;
