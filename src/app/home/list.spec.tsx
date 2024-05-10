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

  it("should display the 'Simple List' heading", () => {
    expect(component.queryByText("Simple List")).toBeDefined();
  });

  describe("Fruit list items", () => {
    it("should render an item for Apple", () => {
      expect(component.queryByText("Apple")).toBeDefined();
    });

    it("should render an item for Banana", () => {
      expect(component.queryByText("Banana")).toBeDefined();
    });

    it("should render an item for Orange", () => {
      expect(component.queryByText("Orange")).toBeDefined();
    });

    it("should not render an item for Grapes", () => {
      expect(component.queryByText("Grapes")).toBeNull();
    });
  });

  it("should render exactly three items in the list", () => {
    const items = component.container.querySelectorAll("li");
    expect(items.length).toBe(3);
  });
});
