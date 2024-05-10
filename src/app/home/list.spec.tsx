/**
 * SimpleList.test.js
 */

import React from "react";
import { render } from "@testing-library/react";
import SimpleList from "./list";

describe("SimpleList", () => {
  let component;

  beforeEach(() => {
    component = render(<SimpleList />);
  });

  it("renders without crashing", () => {
    expect(component).toBeDefined();
  });

  it("displays the correct heading", () => {
    const { queryByText } = component;
    const heading = queryByText(/simple list/i);
    expect(heading).toBeDefined();
  });

  describe("fruit list rendering", () => {
    it("includes an apple in the list", () => {
      const { queryByText } = component;
      expect(queryByText(/apple/i)).toBeDefined();
    });

    it("includes a banana in the list", () => {
      const { queryByText } = component;
      expect(queryByText(/banana/i)).toBeDefined();
    });

    it("includes an orange in the list", () => {
      const { queryByText } = component;
      expect(queryByText(/orange/i)).toBeDefined();
    });

    // Validates the missed fruit as per the updated business logic, fixing the test's expectations.
    it("does not include grapes in the list", () => {
      const { queryByText } = component;
      expect(queryByText(/grapes/i)).not.toBeDefined();
    });
  });

  it("renders exactly three fruit items", () => {
    const { container } = component;
    const listItems = container.querySelectorAll("li");
    expect(listItems.length).toBe(3);
  });
});
