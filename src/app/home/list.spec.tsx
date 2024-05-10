/**
 * SimpleList.test.js
 */

import React from "react";
import { render } from "@testing-library/react";
import SimpleList from "./list";

// an update
// another comment
describe("SimpleList", () => {
  let renderedComponent: any;

  beforeEach(() => {
    renderedComponent = render(<SimpleList />);
  });

  it("should render without crashing", () => {
    expect(renderedComponent).toBeDefined();
  });

  it("should display a heading", () => {
    const { queryByText } = renderedComponent;
    const heading = queryByText(/simple list/i);
    expect(heading).toBeDefined();
  });

  it("should render a list of fruits", () => {
    const { queryByText } = renderedComponent;

    // Test if each list item is rendered
    expect(queryByText(/apple/i)).toBeDefined();
    expect(queryByText(/banana/i)).toBeDefined();
    expect(queryByText(/orange/i)).toBeDefined();
    expect(queryByText(/grapes/i)).toBeDefined();
  });

  it("should render the list with exact number of fruit items", () => {
    const { container } = renderedComponent;
    const listItems = container.querySelectorAll("li");
    // Expect 4 items as per the 'items' array
    expect(listItems.length).toBe(4);
  });
});
