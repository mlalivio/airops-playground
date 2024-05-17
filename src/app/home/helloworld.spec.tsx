// HelloWorld.test.js
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import HelloWorld from "./helloworld";

describe("HelloWorld Component", () => {
  let inputElement: any;
  let buttonElement: any;

  beforeEach(() => {
    render(<HelloWorld />);
    inputElement = screen.getByPlaceholderText(/add new greeting/i);
    buttonElement = screen.getByRole("button", { name: /add greeting/i });
  });

  describe("Initial render", () => {
    it("should render initial greeting list", () => {
      const initialGreetings = [
        "Hello, World!",
        "Hola, Mundo!",
        "Bonjour, le Monde!",
        "Bonjou!",
        "Bonjour!",
      ];
      initialGreetings.forEach((greeting) => {
        expect(screen.getByText(greeting)).toBeDefined();
      });
    });
  });

  describe("Adding greetings", () => {
    it("should add a new greeting when input is filled and button is clicked", () => {
      fireEvent.change(inputElement, { target: { value: "Ciao, Mondo!" } });
      fireEvent.click(buttonElement);

      expect(screen.getByText(/ciao, mondo!/i)).toBeDefined();
    });

    it("should clear input field after adding a new greeting", () => {
      fireEvent.change(inputElement, { target: { value: "Hallo, Welt!" } });
      fireEvent.click(buttonElement);

      expect(inputElement.value).toBe("");
    });

    it("should include newly added greeting in the list", () => {
      fireEvent.change(inputElement, { target: { value: "Namaste, Duniya!" } });
      fireEvent.click(buttonElement);

      expect(screen.getByText(/namaste, duniya!/i)).toBeDefined();
    });
  });

  describe("Invalid input handling", () => {
    it("should not add a new greeting when the input is empty and the button is clicked", () => {
      fireEvent.change(inputElement, { target: { value: "" } });
      fireEvent.click(buttonElement);

      const greetingsListItems = screen.getAllByRole("listitem");
      expect(greetingsListItems).toHaveLength(5);
    });
  });

  describe("Duplicate greetings", () => {
    it("should handle duplicate greeting additions gracefully", () => {
      // Ensure unique greetings list by adding a duplicate "Hello, World!"
      fireEvent.change(inputElement, { target: { value: "Hello, World!" } });
      fireEvent.click(buttonElement);

      const greetingsListItemsAfterDuplicateAdd =
        screen.getAllByRole("listitem");
      // Expect the list length not to change because "Hello, World!" is a duplicate
      expect(greetingsListItemsAfterDuplicateAdd).toHaveLength(5);
    });
  });
});
