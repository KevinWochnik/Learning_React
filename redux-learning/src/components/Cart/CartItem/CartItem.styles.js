import styled from "styled-components";

export const CartItemWrapper = styled.li`
  width: 380px;
  background-color: ${({ theme: { colors } }) => colors.white};
  height: 80px;
  border-radius: 10px;
  margin-top: 5%;

  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

  & * {
    flex-grow: 1;
    text-align: center;
    margin: 0;
    padding: 0;
  }

  & h1 {
    flex-basis: 30%;
    font-size: ${({ theme: { fontSize } }) => fontSize.xl};

    text-align: left;
    margin-left: 10px;
  }
  & h2 {
    flex-basis: 30%;
    font-size: ${({ theme: { fontSize } }) => fontSize.m};

    text-align: right;
  }
  & h3 {
    flex-basis: 20%;
    font-size: ${({ theme: { fontSize } }) => fontSize.s};
  }
  & button {
    flex-grow: 0;

    width: 40px;
    margin: 0 10px 0 5px;

    font-size: ${({ theme: { fontSize } }) => fontSize.xl};

    background-color: ${({ theme: { colors } }) => colors.darkGrey};
    color: ${({ theme: { colors } }) => colors.white};
    border: none;
    border-radius: 5px;
  }
`;
