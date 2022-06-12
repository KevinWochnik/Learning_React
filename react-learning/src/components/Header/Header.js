import React from "react";
import HeaderButton from "../HeaderButton/HeaderButton";
import { HeaderWrapper } from "./Header.styles";

const Header = () => (
  <HeaderWrapper>
    <p>ReactMeals</p>
    <HeaderButton />
  </HeaderWrapper>
);

export default Header;
