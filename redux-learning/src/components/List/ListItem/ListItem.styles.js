import styled from "styled-components";

export const ListItemWrapper = styled.li`
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
    flex-basis: 60%;
    font-size: ${({ theme: { fontSize } }) => fontSize.xl};

    text-align: left;
    margin-left: 10px;
  }
  & h2 {
    font-size: ${({ theme: { fontSize } }) => fontSize.m};
    width: 30px;
    height: 30px;
    line-height: 30px;
    margin-right: 10px;

    background-color: ${({ theme: { colors } }) => colors.darkGrey};
    color: ${({ theme: { colors } }) => colors.white};
    border: none;
    border-radius: 5px;

    text-align: center;
  }
  & h3 {
    flex-basis: 50%;
    font-size: ${({ theme: { fontSize } }) => fontSize.s};
    text-align: left;
    margin-left: 10px;
  }
  & button {
    flex-grow: 0;

    width: 100px;
    height: 30px;
    margin: 0 10px 0 5px;

    font-size: ${({ theme: { fontSize } }) => fontSize.m};

    background-color: ${({ theme: { colors } }) => colors.darkGrey};
    color: ${({ theme: { colors } }) => colors.white};
    border: none;
    border-radius: 5px;
  }
`;
