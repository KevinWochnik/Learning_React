import styled from "styled-components";

export const DefaultButton = styled.button`
  padding: 2px;
  background-color: ${({ theme: { colors } }) => colors.brown};
  border: 3px solid ${({ theme: { colors } }) => colors.brown};
  border-radius: 15px;
  color: ${({ theme: { colors } }) => colors.white};
  font-weight: bold;
  cursor: pointer;
`;

// flex-basis: ${({fbasis})=>fbasis?fbasis+'%':null};
// justify-content: center;
