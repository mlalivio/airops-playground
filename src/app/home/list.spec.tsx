/**
 * SimpleList.test.js
 */

import React from "react";
import { render } from "@testing-library/react";
import SimpleList from "./list";

describe("SimpleList component", () => {
  let component;

  beforeEach(() => {
    component = render(<SimpleList />);
  });

  it("should render without crashing", () => {
    expect(component).toBeDefined();
  });

  it("should display the correct heading", () => {
    const { queryByText } = component;
    expect(queryByText(/simple list/i)).toBeDefined();
  });

  describe("Fruit list items", () => {
    it("should include an apple", () => {
      expect(component.queryByText(/apple/i)).toBeDefined();
    });

    it("should include a banana", () => {
      expect(component.queryByText(/banana/i)).toBeDefined();
    });

    it("should include an orange", () => {
      expect(component.queryByText(/orange/i)).toBeDefined();
    });

    it("should not include grapes", () => {
      expect(component.queryByText(/grapes/i)).toBeNull();
    });
  });

  it("should render exactly three fruit items", () => {
    const listItems = component.container.querySelectorAll("li");
    expect(listItems.length).toBe(3);
  });
});
