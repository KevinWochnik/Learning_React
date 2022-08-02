import renderWithStyles from "../../../helpers/renderWithStyles";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Cart from "./Cart.js";

describe("Cart component", () => {
  test("renders the cart component with side components", () => {
    // Arrange
    renderWithStyles(<Cart />);
    // Act
    // Assert
    const paragraphItem = screen.getByTestId("para");
    const CartItem = screen.getByTestId("CartItem");

    expect(paragraphItem).toBeInDocument();
    expect(CartItem).not.toBeInDocument();
  });
});
