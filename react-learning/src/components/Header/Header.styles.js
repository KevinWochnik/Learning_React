import styled from "styled-components";

export const HeaderWrapper = styled.div`
  grid-area: header;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  background-color: ${({ theme }) => theme.colors.brown};
  & p {
    margin-left: 5%;
    color: white;
    font-weight: bold;
    letter-spacing: 1px;
    font-size: ${({ theme }) => theme.fontSize.xl};
  }
`;

