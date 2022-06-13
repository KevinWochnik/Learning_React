import { HeaderButtonWrapper, CartIcon } from "./HeaderButton.styles";

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
