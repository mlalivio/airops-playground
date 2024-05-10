/**
 * SimpleList.test.js
 */

import React from "react";
import { render } from "@testing-library/react";
import SimpleList from "./SimpleList"; // Ensure the import matches the file name and export

describe("SimpleList Component Tests", () => {
  let component;

  beforeEach(() => {
    component = render(<SimpleList />);
  });

  it("renders without crashing", () => {
    expect(component).toBeDefined();
  });

  it("displays the component heading", () => {
    const {queryByText} = component;
    const heading = queryByText(/simple list/i);
    expect(heading).toBeDefined();
  });

  // Test case to verify each listed fruit is rendered correctly
  it("renders the apple item", () => {
    const {queryByText} = component;
    expect(queryByText(/apple/i)).toBeDefined();
  });

  it("renders the banana item", () => {
    const {queryByText} = component;
    expect(queryByText(/banana/i)).toBeDefined();
  });

  it("renders the orange item", () => {
    const {queryByText} = component;
    expect(queryByText(/orange/i)).toBeDefined();
  });

  it("verifies the total number of list items rendered", () => {
    const { container } = component;
    const listItems = container.querySelectorAll("li");
    expect(listItems.length).toBe(3); // Updated to match the actual items in the component
  });
});
