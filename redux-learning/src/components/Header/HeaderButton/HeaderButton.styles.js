import styled from "styled-components";

export const HeaderButtonWrapper = styled.button`
  width: 300px;
  height: 60px;
  background-color: ${({ theme: { colors } }) => colors.lightGreen};
  border: none;
  border-radius: 20px;

  display: flex;
  justify-content: space-around;
  align-items: center;

  & h1 {
    color: ${({ theme: { colors } }) => colors.darkGrey};
    text-transform: uppercase;
    letter-spacing: 1px;
  }
  & div {
    width: 60px;
    height: 40px;
    border-radius: 20px;
    background-color: ${({ theme: { colors } }) => colors.darkGrey};

    display: flex;
    justify-content: center;
    align-items: center;
    & p {
      color: ${({ theme: { colors } }) => colors.white};
      font-size: ${({ theme: { fontSize } }) => fontSize.xl};
    }
  }
`;
