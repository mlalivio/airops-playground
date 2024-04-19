import React from "react";
import { render } from "@testing-library/react";
import SimpleList from "./list";

describe("SimpleList Component Tests", () => {
    let component;

    beforeEach(() => {
        component = render(<SimpleList />);
    });
    it("should render without crashing", () => {
        expect(component).toBeDefined();
    });
    it("should display the component title", () => {
        expect(component.getByText("Simple List")).toBeDefined();
    });
    it("should display all list items correctly", () => {
        const items = ["Apple", "Banana", "Orange", "Grapes", "Peach"];
        items.forEach((item) => {
            expect(component.getByText(item)).toBeDefined();
        });
    });
    it("should render the correct number of list items", () => {
        const listItems = component.container.querySelectorAll("li");
        expect(listItems.length).toBe(5);
    });
});
