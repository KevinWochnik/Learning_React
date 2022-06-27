import HeaderButton from "../HeaderButton/HeaderButton";
import { HeaderTitleParagraph } from "../HeaderTitle/HeaderTitleParagraph.styles";
import { HeaderWrapper } from "./Header.styles";

const Header = () => {
  return (
    <HeaderWrapper>
      <HeaderTitleParagraph>redux items</HeaderTitleParagraph>
      <HeaderButton />
    </HeaderWrapper>
  );
};

export default Header;
