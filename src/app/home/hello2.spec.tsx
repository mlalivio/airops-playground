// HelloWorld2.test.js

import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import HelloWorld2 from "./HelloWorld2"; // Ensure that the import statement matches the component name exactly

describe("HelloWorld2 Component", () => {
  // Use beforeEach to render the component before each test to avoid duplicate code
  beforeEach(() => {
    render(<HelloWorld2 />);
  });

  it("renders without crashing", () => {
    const helloWorldComponent = screen.getByText("Hello, World!"); // This checks if the component is rendered with initial state
    expect(helloWorldComponent).toBeDefined(); // Use toBeDefined to check if the component exists
  });

  it("displays the default message correctly", () => {
    const defaultMsg = screen.getByText("Hello, World!"); // Checks for specific text
    expect(defaultMsg).toBeDefined(); // Checks if the text "Hello, World!" is part of the document, ensuring it's rendered
  });

  it("changes the message on button click", () => {
    const button = screen.getByRole('button', { name: "Click me" }); // Accesses the button by its role and name
    fireEvent.click(button); // Simulates a click event on the button
    const updatedMsg = screen.getByText("You clicked the button!"); // After the click, this checks if the message updated
    expect(updatedMsg).toBeDefined(); // Verifies the new message is rendered in the component
  });
});
