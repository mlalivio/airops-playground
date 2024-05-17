import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import HelloWorld from "./hello";

describe("HelloWorld Component", () => {
  beforeEach(() => {
    render(<HelloWorld />);
  });

  it("renders hello world message initially", () => {
    const initialMessage = screen.getByText(/hello, world!/i);
    expect(initialMessage).toBeDefined();
  });

  describe("when the button is clicked", () => {
    beforeEach(() => {
      const button = screen.getByRole("button");
      fireEvent.click(button);
    });

    it('displays "You clicked the button!" message', () => {
      const clickedMessage = screen.getByText(/you clicked the button!/i);
      expect(clickedMessage).toBeDefined();
    });
  });
});
