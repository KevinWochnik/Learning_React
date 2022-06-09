import styled from "styled-components";

export const HeaderWrapper = styled.div`
  grid-area: header;
  background-color: ${({ theme }) => theme.colors.brown};
  height: 100%;
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;

  & p{
      margin-left: 5%;
      color: white;
  }
  & div{
      margin-right: 10%;
      color: white;
  }
`;
