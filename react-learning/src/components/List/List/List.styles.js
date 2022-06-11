import styled from "styled-components";

export const ListWrapper = styled.div`
  grid-area: list;
  min-height: 400px;
  width: 700px;
  margin: 170px auto 50px;

  border-radius: 10px;
  background-color: ${({ theme: { colors } }) => colors.white};
  & ul {
    padding: 0 20px;
    margin: 10px auto;
    list-style: none;
  }

  & li {
    &:not(:nth-last-of-type(1))::after {
      content: "";
      display: block;
      width: 100%;
      height: 1px;
      background-color: black;
      flex-basis: 100%;
    }
  }
`;
