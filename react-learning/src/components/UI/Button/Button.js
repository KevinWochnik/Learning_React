import { Wrapper } from "./Button.styles";

const Button = ({ type, onClick, children }) => {
  return (
    <Wrapper type={type || "button"} onClick={onClick}>
      {children}
    </Wrapper>
  );
};

export default Button;
