import styled from "styled-components";
import { HeaderTitleParagraph } from "../HeaderTitle/HeaderTitleParagraph.styles";
import {HeaderButtonWrapper} from "../HeaderButton/HeaderButton.styles";

export const HeaderWrapper = styled.div`
  grid-area: header;

  width: 100%;
  background-color: ${({ theme: { colors } }) => colors.darkGrey};

  display: flex;
  justify-content: space-between;
  align-items: center;

  ${HeaderTitleParagraph} {
    margin-left: 5%;
  }
  ${HeaderButtonWrapper}{
    margin-right: 5%;
  }
`;
