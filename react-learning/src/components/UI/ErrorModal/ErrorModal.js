import Button from "../Button/Button";
import { Wrapper, BackdropWrapper } from "./ErrorModal.styles";
import ReactDOM from "react-dom";

const Backdrop = ({ onError }) => {
  return <BackdropWrapper onClick={onError} />;
};

const ModalOverlay = ({ title, message, onError }) => {
  return (
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
  );
};

const ErrorModal = ({ title, message, onError }) => {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onError={onError} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay title={title} message={message} onError={onError} />,
        document.getElementById("overlay-root")
      )}
    </>
  );
};
export default ErrorModal;
