import styled from "styled-components";
import { DefaultButton } from "../Buttons/DefaultButton/DefaultButton.styles";

export const OverlayWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;

  z-index: 2;
  height: 100vh;
  width: 100vw;

  background-color: ${({ theme: { colors } }) => colors.black};
  opacity: 0.3;
`;

export const ModalContentWrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  z-index: 3;
  min-height: 250px;
  width: 500px;
  border-radius: 25px;

  border: 3px solid ${({ theme: { colors } }) => colors.brown};
  background-color: ${({ theme: { colors } }) => colors.white};

  display: grid;
  grid-template-columns: 1fr 175px;
  grid-template-rows: 50px 1fr;
  grid-template-areas:
    "header header"
    "content summary";
    align-items: start;
`;

export const Title = styled.h1`
  margin: 0;
  padding: 0;

  grid-area: header;
  width: 100%;

  text-align: center;
  line-height: 50px;
  color: ${({ theme: { colors } }) => colors.brown};

  &::after {
    content: "";
    display: block;

    width: 80%;
    margin: 0 auto;

    border: 1px solid ${({ theme: { colors } }) => colors.brown};
  }
`;

export const Content = styled.ul`
  grid-area: content;

  display: flex;
  flex-flow: row wrap;
  justify-content: left;
  align-items: center;

  list-style: none;

  & li {
    flex-basis: 100%;
    height: 35px;

    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 5px;
    border: 2px solid ${({ theme: { colors } }) => colors.brown};
    border-radius: 10px;
    margin-bottom: 5px;

    & h3 {
      flex-basis: 70%;
      font-size: ${({ theme: { fontSize } }) => fontSize.l};
    }
    & div{
      flex-basis: 30%;
      display: flex;
      justify-content: space-around;
      align-items: center;
      & span{
        padding: 3px 6px;

        font-size: ${({ theme: { fontSize } }) => fontSize.l};
        font-weight: bold;
        border-radius: 50%;
      }
    }
  }
`;

export const Summary = styled.div`
  grid-area: summary;

  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: center;

  max-height: 50px;

  & h2 {
    flex-basis: 100%;
    text-align: center;

    font-size: ${({ theme: { fontSize } }) => fontSize.xl};
    color: ${({ theme: { colors } }) => colors.brown};
  }
  & span {
    flex-basis: 100%;

    text-align: center;

    font-size: ${({ theme: { fontSize } }) => fontSize.l};
    font-weight: bold;
  }
  & span:nth-last-of-type(1) {
    color: ${({ theme: { colors } }) => colors.brown};
  }
  & ${DefaultButton} {
    flex-basis: 35%;

    margin: 0 5px;
    padding: 0 10px;
  }
`;
