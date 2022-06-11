import React from "react";
import { HeaderWrapper, CartIcon } from "./Header.styles";

const Header = () => (
  <HeaderWrapper>
    <p>ReactMeals</p>
    <button>
      <CartIcon />
      <span>Your Cart</span>
      <span>0</span>
    </button>
  </HeaderWrapper>
);

export default Header;
