typescript
import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Counter from "./counter";

describe("Counter component", () => {
  let getByText: ReturnType<typeof render>['getByText'];

  beforeEach(() => {
    ({ getByText } = render(<Counter />));
  });

  it("renders successfully", () => {
    expect(getByText(/Counter:/)).toBeDefined();
  });

  it("initializes with a count of 0", () => {
    expect(getByText("Counter: 0")).toBeDefined();
  });

  describe("Increment button", () => {
    it("increments count by 1 on click", () => {
      fireEvent.click(getByText("Increment"));
      expect(getByText("Counter: 1")).toBeDefined();
    });
  });

  describe("Decrement button", () => {
    beforeEach(() => {
      // Pre-increment to ensure count is above 0 for decrement tests
      fireEvent.click(getByText("Increment"));
    });

    it("decrements count by 1 on click", () => {
      fireEvent.click(getByText("Decrement"));
      expect(getByText("Counter: 0")).toBeDefined();
    });

    it("does not decrement count below 0", () => {
      // Pre-decrement to ensure testing behavior when count is at 0
      fireEvent.click(getByText("Decrement"));
      fireEvent.click(getByText("Decrement"));
      expect(getByText("Counter: 0")).toBeDefined();
    });
  });
});
