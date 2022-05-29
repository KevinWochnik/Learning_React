import styled from "styled-components";
import { Wrapper as Card } from "../Card/Card.styles";

export const Wrapper = styled(Card)`
  position: fixed;
  top: 30vh;
  left: 10%;
  width: 80%;
  z-index: 100;
  overflow: hidden;
  @media (min-width: 768px) {
    left: calc(50% - 20rem);
    width: 40rem;
  }

  header {
    background: #4f005f;
    padding: 1rem;
  }

  header h2 {
    margin: 0;
    color: white;
  }

  div {
    padding: 1rem;
  }

  footer {
    padding: 1rem;
    display: flex;
    justify-content: flex-end;
  }
`;

export const BackdropWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 10;
  background: rgba(0, 0, 0, 0.75);
`;
