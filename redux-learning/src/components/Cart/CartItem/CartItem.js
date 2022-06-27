import { CartItemWrapper } from "./CartItem.styles";

const CartItem = () => {
  return (
    <CartItemWrapper>
      <h1>new pc</h1>
      <h2>$15.00</h2>
      <h3>($5.00/item)</h3>
      <h1>x4</h1>
      <button>+</button>
      <button>-</button>
    </CartItemWrapper>
  );
};

export default CartItem;
