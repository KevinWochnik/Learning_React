import styled from "styled-components";
import { Cart } from "@styled-icons/bootstrap/Cart";


export const HeaderButtonWrapper = styled.button`
  margin-right: 10%;
  padding: 10px 30px;
  border-radius: 20px;
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  font-weight: bold;
  font-size: ${({ theme }) => theme.fontSize.l};
  cursor: pointer;
  & * {
    padding: 0 5px;
    line-height: 30px;
  }
  & span:nth-of-type(2) {
    margin-left: 8px;
    padding: 2px 10px;
    border-left: 1px solid;
    border-right: 1px solid;
    border-radius: 20px;
    border-color: ${({ theme }) => theme.colors.lightbrown};
    background-color: ${({ theme }) => theme.colors.lightbrown};
  }
`;

export const CartIcon = styled(Cart)`
  color: white;
  height: 30px;
  width: 30px;
`;
