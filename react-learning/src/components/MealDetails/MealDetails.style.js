import styled from "styled-components";

export const MealDetailsWrapper = styled.div`
  justify-content: flex-start;
  font-style: italic;
  & p {
    flex-basis: 100%;
  }
  & span {
    flex-basis: 100%;
    font-weight: bold;
    color: ${({ theme: { colors } }) => colors.orange};
  }
`;
