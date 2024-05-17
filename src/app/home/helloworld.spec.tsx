// HelloWorld.test.js
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import HelloWorld from "./helloworld";

describe("HelloWorld Component", () => {
  let inputElement;
  let buttonElement;

  beforeEach(() => {
    render(<HelloWorld />);
    inputElement = screen.getByPlaceholderText(/add new greeting/i);
    buttonElement = screen.getByRole("button", { name: /add greeting/i });
  });

  describe("Initial render", () => {
    it("renders initial greeting list", () => {
      const initialGreetings = [
        "Hello, World!",
        "Hola, Mundo!",
        "Bonjour, le Monde!",
        "Bonjou!",
        "Bonjour!",
      ];
      initialGreetings.forEach(greeting => expect(screen.getByText(greeting)).toBeDefined());
    });
  });

  describe("Adding greetings", () => {
    it("adds a new greeting when input is filled and button is clicked", () => {
      fireEvent.change(inputElement, { target: { value: "Ciao, Mondo!" } });
      fireEvent.click(buttonElement);

      expect(screen.getByText(/ciao, mondo!/i)).toBeDefined();
    });

    it("clears input field after adding a new greeting", () => {
      fireEvent.change(inputElement, { target: { value: "Hallo, Welt!" } });
      fireEvent.click(buttonElement);

      expect(inputElement.value).toBe("");
    });
  });

  describe("Existing greetings", () => {
    it("does not add a new greeting when input is empty and button is clicked", () => {
      fireEvent.change(inputElement, { target: { value: "" } });
      fireEvent.click(buttonElement);

      const greetingsListItems = screen.getAllByRole("listitem");
      expect(greetingsListItems).toHaveLength(5);
    });

    it("does not add a duplicate greeting", () => {
      fireEvent.change(inputElement, { target: { value: "Hello, World!" } });
      fireEvent.click(buttonElement);

      const greetingsListItems = screen.getAllByRole("listitem");
      expect(greetingsListItems).toHaveLength(5); // Original list should remain unchanged
    });
  });

  describe("Component functionality and integrity", () => {
    it("prevents addition of duplicate greetings", () => {
      // Attempt to add an existing greeting
      fireEvent.change(inputElement, { target: { value: "Hello, World!" } });
      fireEvent.click(buttonElement);

      const uniqueGreetingsList = screen.getAllByRole("listitem");
      expect(uniqueGreetingsList).toHaveLength(5); // Expect no addition in the list length
    });
  });
});
