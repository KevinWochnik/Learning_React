import { HeaderButtonWrapper } from "./HeaderButton.styles";
import { CartIcon } from "../Header/Header.styles";

const HeaderButton = () => {
  return (
    <HeaderButtonWrapper>
      <CartIcon />
      <span>Your Cart</span>
      <span>0</span>
    </HeaderButtonWrapper>
  );
};
export default HeaderButton;
