import styled from "styled-components";

export const CartWrapper = styled.div`
  grid-area: cart;

  width: 420px;
  min-height: 30%;

  margin: 50px auto 0;
  background-color: ${({ theme: { colors } }) => colors.darkGrey};
  border: none;
  border-radius: 20px;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

  & p {
    height: 10px;
    line-height: 10px;
    font-size: ${({ theme: { fontSize } }) => fontSize.xl};
    color: ${({ theme: { colors } }) => colors.lightGreen};
  }

  & ul {
    margin: 0 0 5% -10%;
  }
`;
