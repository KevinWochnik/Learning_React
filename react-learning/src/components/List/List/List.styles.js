import styled from "styled-components";

export const ListWrapper = styled.div`
  grid-area: list;
  min-height: 100px;
  max-height: 400px;
  width: 700px;
  margin: 170px auto 0;

  border-radius: 10px;
  background-color: ${({ theme: { colors } }) => colors.white};

  & * {
    margin: 20px 30px;
    &:not(:nth-last-of-type(1))::after {
      content: "";
      display: block;
      width: 100%;
      height: 1px;
      margin-top: 10px;
      background-color: black;
    }
  }
`;
