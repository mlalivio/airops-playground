import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Counter from "./counter";

describe("Counter Component", () => {
  beforeEach(() => {
    render(<Counter />);
  });

  it("renders Counter component correctly", () => {
    const counterText = screen.getByText(/counter:/i);
    expect(counterText).toBeDefined();
  });

  it("initial count is set to 0", () => {
    const initialCount = screen.getByText(/counter: 0/i);
    expect(initialCount).toBeDefined();
  });

  describe("Increment button", () => {
    it("increments count by 1 on click", () => {
      fireEvent.click(screen.getByText("Increment"));
      const incrementedCount = screen.getByText(/counter: 1/i);
      expect(incrementedCount).toBeDefined();
    });
  });

  describe("Decrement button", () => {
    beforeEach(() => {
      // Ensuring the counter is incremented before trying to decrement to avoid negative count for this test case
      fireEvent.click(screen.getByText("Increment"));
    });

    it("decrements count by 1 on click", () => {
      fireEvent.click(screen.getByText("Decrement"));
      const decrementedCount = screen.getByText(/counter: 0/i);
      expect(decrementedCount).toBeDefined();
    });
  });

  it("does not decrement below 0", () => {
    fireEvent.click(screen.getByText("Decrement"));
    const countAfterDecrement = screen.queryByText(/counter: -1/i);
    expect(countAfterDecrement).toBeNull();
  });
});
