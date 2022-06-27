import styled from "styled-components";

export const MainLayoutWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  width: 1024px;
  height: 900px;
  background-color: ${({ theme: { colors } }) => colors.lightGrey};

  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 100px auto 1fr;
  grid-template-areas:
    "header"
    "cart"
    "list";
    align-items: self-start;
`;
