// Import necessary utilities and component for testing
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import HelloWorld from "./helloworld";

// Describe block for the HelloWorld component
describe("HelloWorld Component", () => {
  // Define variables for commonly accessed elements
  let inputElement;
  let buttonElement;

  // Use beforeEach hook to render component before each test to avoid repetition
  beforeEach(() => {
    render(<HelloWorld />);
    inputElement = screen.getByPlaceholderText(/add new greeting/i);
    buttonElement = screen.getByRole("button", { name: /add greeting/i });
  });

  // Test cases for initial render of component
  describe("Initial render", () => {
    it("renders initial greeting list", () => {
      // Expected greetings to be present initially
      const initialGreetings = [
        "Hello, World!",
        "Hola, Mundo!",
        "Bonjour, le Monde!",
        "Bonjou!",
        "Bonjour!",
      ];
      // Assert that each greeting is rendered
      initialGreetings.forEach(greeting => {
        expect(screen.getByText(greeting)).toBeDefined();
      });
    });
  });

  // Test cases for adding greetings functionality
  describe("Adding greetings", () => {
    it("adds a new greeting when input is filled and button is clicked", () => {
      // Simulate user input and button click
      fireEvent.change(inputElement, { target: { value: "Ciao, Mondo!" } });
      fireEvent.click(buttonElement);
      // Assert new greeting is added
      expect(screen.getByText(/ciao, mondo!/i)).toBeDefined();
    });

    it("clears input field after adding a new greeting", () => {
      // Simulate user input and button click for different greeting
      fireEvent.change(inputElement, { target: { value: "Hallo, Welt!" } });
      fireEvent.click(buttonElement);
      // Assert input field is cleared
      expect(inputElement.value).toBe("");
    });
  });

  // Test cases for invalid input handling
  describe("Invalid input handling", () => {
    it("does not add a new greeting when the input is empty and the button is clicked", () => {
      // Simulate button click with empty input
      fireEvent.change(inputElement, { target: { value: "" } });
      fireEvent.click(buttonElement);
      // Assert the number of list items remains unchanged
      const greetingsListItems = screen.getAllByRole("listitem");
      expect(greetingsListItems).toHaveLength(5);
    });
  });

  // Test cases for handling duplicates
  describe("Duplicate greetings", () => {
    it("prevents duplicate greeting additions", () => {
      // Attempt to add a duplicate greeting
      fireEvent.change(inputElement, { target: { value: "Hello, World!" } });
      fireEvent.click(buttonElement);
      // Assert the number of list items does not increase
      const greetingsListItemsAfterDuplicateAdd = screen.getAllByRole("listitem");
      expect(greetingsListItemsAfterDuplicateAdd).toHaveLength(5);
    });
  });

  // New test case to ensure greeting addition logic corrects for missing business logic
  describe("Greeting addition logic correction", () => {
    it("should not add an empty greeting", () => {
      // Testing to ensure empty strings are not added to the list
      const invalidGreeting = "";
      fireEvent.change(inputElement, { target: { value: invalidGreeting } });
      fireEvent.click(buttonElement);
      expect(screen.queryByText(invalidGreeting)).not.toBeInTheDocument();
    });

    it("should prevent addition of undefined greeting", () => {
      // Testing to ensure 'undefined' strings are not treated as valid input
      fireEvent.change(inputElement, { target: { value: undefined } });
      fireEvent.click(buttonElement);
      expect(screen.queryByText("undefined")).not.toBeInTheDocument();
    });
  });
});
