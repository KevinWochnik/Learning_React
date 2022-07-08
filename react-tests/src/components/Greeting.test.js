import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Greeting from "./Greeting";

describe("Greeting component", () => {
  test("renders Hello World", () => {
    // Arrange
    render(<Greeting />);

    // Act
    // ...

    // Assert
    const helloWorldElement = screen.getByText("Hello World", { exact: false });
    expect(helloWorldElement).toBeInTheDocument();
  });
  test("renders initial paragraph test if the button was not clicked", () => {
    // Arrange
    render(<Greeting />);

    // Act
    // ...

    // Asssert
    const initialParagraph = screen.getByText("good to see you!", {
      exact: false,
    });
    expect(initialParagraph).toBeInTheDocument();
  });
  test('renders "Changed!" if the button was clicked', () => {
    // Arrange
    render(<Greeting />);

    // Act
    const button = screen.getByRole("button");
    userEvent.click(button);

    // Assert
    const outputElement = screen.queryByText("Changed!", {exact: false});
    expect(outputElement).toBeInTheDocument();
  });
  test("does not render the initial paragraph text if the button was clicked", () => {
    // Arrange
    render(<Greeting />);

    // Act
    const button = screen.getByRole("button");
    userEvent.click(button);

    // Assert
    const initialParagraph = screen.queryByText("good to see you!", {
        exact: false,
      });
    expect(initialParagraph).toBeNull();
  });
});
