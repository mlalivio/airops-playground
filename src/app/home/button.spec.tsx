```typescript
import { render, fireEvent } from "@testing-library/react";
import Button from "./Button";

describe("Button component", () => {
    it("renders button with children correctly", () => {
        // Arrange
        const { getByText } = render(<Button>Hello</Button>);
        
        // Act
        const buttonElement = getByText("Hello");
        
        // Assert
        expect(buttonElement).toBeInTheDocument();
    });

    it("calls the onClick function when button is clicked", () => {
        // Arrange
        const onClickMock = jest.fn();
        const { getByText } = render(<Button onClick={onClickMock}>Click me</Button>);
        const buttonElement = getByText("Click me");

        // Act
        fireEvent.click(buttonElement);

        // Assert
        expect(onClickMock).toHaveBeenCalled();
    });

    it("disables the button when disabled prop is true", () => {
        // Arrange
        const { getByText } = render(<Button disabled={true}>Disabled</Button>);
        const buttonElement = getByText("Disabled");

        // Assert
        expect(buttonElement).toBeDisabled();
    });

    it("does not call the onClick function when disabled prop is true", () => {
        // Arrange
        const onClickMock = jest.fn();
        const { getByText } = render(<Button onClick={onClickMock} disabled={true}>Click me</Button>);
        const buttonElement = getByText("Click me");

        // Act
        fireEvent.click(buttonElement);

        // Assert
        expect(onClickMock).not.toHaveBeenCalled();
    });
});
```