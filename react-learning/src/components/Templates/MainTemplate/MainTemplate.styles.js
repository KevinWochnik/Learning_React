import styled from "styled-components";

export const MainTemplateWrapper = styled.div`
  min-height: 100vh;
  max-width: 1600px;
  margin: 0 auto;
  background-color: ${({ theme: { colors } }) => colors.darkGrey};

  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 65px 250px 1fr;
  grid-template-areas:
    "header"
    "banner"
    "list";
`;
