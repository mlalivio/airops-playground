import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Counter from "./counter";

describe("Counter component", () => {
  let getByText: any;

  beforeEach(() => {
    ({ getByText } = render(<Counter />));
  });

  it("should render properly", () => {
    expect(getByText("Counter: 0")).toBeDefined();
  });

  describe("Increment button", () => {
    it("increments count on click", () => {
      fireEvent.click(getByText("Increment"));
      expect(getByText("Counter: 1")).toBeDefined();
    });
  });

  describe("Decrement button", () => {
    it("decrements count correctly when count is greater than 0", () => {
      fireEvent.click(getByText("Increment")); // Setup to 1
      fireEvent.click(getByText("Decrement"));
      expect(getByText("Counter: 0")).toBeDefined();
    });

    it("does not decrement below 0", () => {
      fireEvent.click(getByText("Decrement")); // Attempt to decrement at 0
      expect(getByText("Counter: 0")).toBeDefined(); // Corrected expected value based on functionality
    });
  });
});
