```typescript
import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Button from "./Button";

describe("Button component", () => {
    it("renders button text correctly", () => {
        const { getByText } = render(<Button>Click me</Button>);
        expect(getByText("Click me")).toBeInTheDocument();
    });

    it("executes the onClick function when clicked", () => {
        const onClickMock = jest.fn();
        const { getByText } = render(<Button onClick={onClickMock}>Click me</Button>);
        fireEvent.click(getByText("Click me"));
        expect(onClickMock).toHaveBeenCalled();
    });

    it("applies disabled attribute when disabled prop is true", () => {
        const { getByText } = render(<Button disabled>Click me</Button>);
        expect(getByText("Click me")).toBeDisabled();
    });

    it("does not call onClick function when button is disabled", () => {
        const onClickMock = jest.fn();
        const { getByText } = render(<Button onClick={onClickMock} disabled>Click me</Button>);
        fireEvent.click(getByText("Click me"));
        expect(onClickMock).not.toHaveBeenCalled();
    });
});
```