import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Counter from "./counter";

describe("Counter Component", () => {
  beforeEach(() => {
    render(<Counter />);
  });

  it("should render the Counter component", () => {
    const counterComponent = screen.getByText(/counter:/i);
    expect(counterComponent).toBeDefined();
  });

  it("should initialize the count to 0", () => {
    const initialCount = screen.getByText(/counter: 0/i);
    expect(initialCount).toBeDefined();
  });

  describe("Increment button", () => {
    it("should increment count by 1 on click", () => {
      fireEvent.click(screen.getByText("Increment"));
      const incrementedCount = screen.getByText(/counter: 1/i);
      expect(incrementedCount).toBeDefined();
    });
  });

  describe("Decrement button", () => {
    beforeEach(() => {
      fireEvent.click(screen.getByText("Increment"));
    });

    it("should decrement count by 1 on click", () => {
      fireEvent.click(screen.getByText("Decrement"));
      const decrementedCount = screen.getByText(/counter: 0/i);
      expect(decrementedCount).toBeDefined();
    });

    it("should not decrement below 0", () => {
      fireEvent.click(screen.getByText("Decrement"));
      fireEvent.click(screen.getByText("Decrement"));
      const countAfterDecrement = screen.getByText(/counter: 0/i);
      expect(countAfterDecrement).toBeDefined();
    });
  });
});
