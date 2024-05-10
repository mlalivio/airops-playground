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

  it("renders without crashing", () => {
    expect(component).toBeDefined();
  });

  it("displays the correct heading", () => {
    expect(component.queryByText(/simple list/i)).toBeDefined();
  });

  describe("List items correctness", () => {
    const fruits = ["Apple", "Banana", "Orange"];

    fruits.forEach(fruit => {
      it(`includes ${fruit}`, () => {
        expect(component.queryByText(new RegExp(fruit, "i"))).toBeDefined();
      });
    });

    it("does not include grapes", () => {
      expect(component.queryByText(/grapes/i)).toBeNull();
    });
  });

  it("renders exactly three fruit items", () => {
    const listItems = component.container.querySelectorAll("li");
    expect(listItems.length).toBe(3);
  });
});
