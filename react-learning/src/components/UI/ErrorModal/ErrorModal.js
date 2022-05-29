import Button from "../Button/Button";
import { Wrapper, BackdropWrapper } from "./ErrorModal.styles";

const ErrorModal = ({ title, message, onError }) => {
  return (
    <>
      <BackdropWrapper onClick={onError}/>
      <Wrapper>
        <header>
          <h2>{title}</h2>
        </header>
        <div>
          <p>{message}</p>
        </div>
        <footer>
          <Button onClick={onError}>Okay</Button>
        </footer>
      </Wrapper>
    </>
  );
};
export default ErrorModal;
