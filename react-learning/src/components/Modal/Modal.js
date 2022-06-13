import ReactDOM from "react-dom";
import {
  OverlayWrapper,
  ModalContentWrapper,
  Title,
  Content,
  Summary,
} from "./Modal.styles";
import { DefaultButton } from "../Buttons/DefaultButton/DefaultButton.styles";

const Overlay = () => {
  return <OverlayWrapper />;
};


// DUMMY ARRAY
const meals = [{
  name: 'French fries',
  quantity: 2,
}]

const ModalContent = ({ totalPrice }) => {
  return (
    <ModalContentWrapper>
      <Title>Your Cart</Title>
      <Content>
        {meals.map((meal) => (
          <li>
            <h3>{meal.name}</h3>
            <div>
              <span>{meal.quantity}</span>
              <DefaultButton>-1</DefaultButton>
              <DefaultButton>+1</DefaultButton>
            </div>
          </li>
        ))}
      </Content>
      <Summary>
        <h2>Order now</h2>
        <span>Total price</span>
        <span>${totalPrice}</span>
        <DefaultButton>Back</DefaultButton>
        <DefaultButton>Checkout</DefaultButton>
      </Summary>
    </ModalContentWrapper>
  );
};

const Modal = () => {
  const portalDestination = document.getElementById("onTop");
  return (
    <>
      {ReactDOM.createPortal(<Overlay />, portalDestination)}
      {ReactDOM.createPortal(<ModalContent />, portalDestination)}
    </>
  );
};

export default Modal;
