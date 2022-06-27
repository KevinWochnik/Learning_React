import { HeaderButtonWrapper } from "./HeaderButton.styles";
import { uiActions } from "../../store/ui-slice";
import { useDispatch } from "react-redux/es/hooks/useDispatch";
import { useSelector } from "react-redux/es/hooks/useSelector";

const HeaderButton = () => {
  const dispatch = useDispatch();
  const cartIsShown = useSelector((state) => state.ui.isShown);

  const toggleShowCart = () => {
    dispatch(uiActions.toggle());
  };

  return (
    <HeaderButtonWrapper onClick={toggleShowCart}>
      <h1>{cartIsShown ? "hide cart" : "show cart"}</h1>
      <div>
        <p>5</p>
      </div>
    </HeaderButtonWrapper>
  );
};

export default HeaderButton;
