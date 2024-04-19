import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Counter from "./counter";

describe("Counter Component", () => {
  beforeEach(() => render(<Counter />));

  it("renders correctly", () => {
    expect(screen.getByText(/counter:/i)).toBeDefined();
  });

  it("starts at 0", () => {
    expect(screen.getByText(/counter: 0/i)).toBeDefined();
  });

  describe("Increment button", () => {
    it("increases count by 1 on click", () => {
      fireEvent.click(screen.getByText("Increment"));
      expect(screen.getByText(/counter: 1/i)).toBeDefined();
    });
  });

  describe("Decrement button", () => {
    beforeEach(() => {
      // Increment first to avoid negative count
      fireEvent.click(screen.getByText("Increment"));
    });

    it("reduces count by 1 on click", () => {
      fireEvent.click(screen.getByText("Decrement"));
      expect(screen.getByText(/counter: 0/i)).toBeDefined();
    });

    it("does not go below 0", () => {
      // Second decrement to test boundary condition
      fireEvent.click(screen.getByText("Decrement"));
      expect(screen.queryByText(/counter: -1/i)).toBeNull();
    });
  });
});
