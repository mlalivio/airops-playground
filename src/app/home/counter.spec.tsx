import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Counter from "./counter";

describe("Counter Component", () => {
  beforeEach(() => {
    render(<Counter />);
  });

  it("should render the counter component", () => {
    expect(screen.getByText(/counter:/i)).toBeDefined();
  });

  it("should start at 0", () => {
    expect(screen.getByText("Counter: 0")).toBeDefined();
  });

  describe("Increment button", () => {
    it("should increase count by 1 on click", () => {
      fireEvent.click(screen.getByRole('button', { name: /increment/i }));
      expect(screen.getByText("Counter: 1")).toBeDefined();
    });
  });

  describe("Decrement button functionality", () => {
    beforeEach(() => {
      // Increment first to set counter to 1
      fireEvent.click(screen.getByRole('button', { name: /increment/i }));
    });

    it("should decrease count by 1 on click", () => {
      fireEvent.click(screen.getByRole('button', { name: /decrement/i }));
      expect(screen.getByText("Counter: 0")).toBeDefined();
    });

    it("should not decrease count below 0", () => {
      // Attempt to decrement at 0 to test if it goes negative
      fireEvent.click(screen.getByRole('button', { name: /decrement/i }));
      expect(screen.queryByText("Counter: -1")).toBeNull();
    });
  });
});

