// HelloWorld3.test.js
import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import HelloWorld3 from "./HelloWorld3";

describe("HelloWorld3 Component", () => {
  let getByText;

  beforeEach(() => {
    ({ getByText } = render(<HelloWorld3 />));
  });

  it("renders with initial message", () => {
    const initialMessage = getByText("Hello, World!");
    expect(initialMessage).toBeDefined();
  });

  it("updates the message when the button is clicked", () => {
    const button = getByText("Click me");
    fireEvent.click(button);

    const updatedMessage = getByText("You clicked the button!");
    expect(updatedMessage).toBeDefined();
  });
});
