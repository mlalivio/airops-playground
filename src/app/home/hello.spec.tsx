import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import HelloWorld from "./hello";

describe("HelloWorld Component", () => {
  beforeEach(() => {
    render(<HelloWorld />);
    console.log("test");
  });

  it("should be defined", () => {
    const helloWorldComp = screen.getByText(/hello, world!/i);
    expect(helloWorldComp).toBeDefined();
  });

  it('should display initial message "Hello, World!"', () => {
    expect(screen.getByText(/hello, world!/i)).toBeDefined();
  });

  it('should change message to "You clicked the button!" when button is clicked', () => {
    const button = screen.getByRole("button");
    fireEvent.click(button);
    expect(screen.getByText(/you clicked the button!/i)).toBeDefined();
  });
});
