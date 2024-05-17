// HelloWorld.test.js
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import HelloWorld from "./helloworld";

describe("HelloWorld Component", () => {
  let inputElement, buttonElement;

  beforeEach(() => {
    render(<HelloWorld />);
    inputElement = screen.getByPlaceholderText(/add new greeting/i);
    buttonElement = screen.getByRole("button", { name: /add greeting/i });
  });

  it("should render initial greeting list", () => {
    const initialGreetings = [
      "Hello, World!",
      "Hola, Mundo!",
      "Bonjour, le Monde!",
      "Bonjou!",
      "Bonjour!"
    ];
    initialGreetings.forEach(greeting => {
      expect(screen.getByText(greeting)).toBeDefined();
    });
  });

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

  it("should not add a new greeting when the input is empty and the button is clicked", () => {
    // Note: This corrects an oversight in original test where the assertion incorrectly assumed the length post a failed add
    fireEvent.change(inputElement, { target: { value: "" } });
    fireEvent.click(buttonElement);

    const greetingsListItems = screen.getAllByRole("listitem");
    expect(greetingsListItems).toHaveLength(5); // Updated to match initial state as per updated business logic
  });

  it("should include newly added greeting in the list", () => {
    fireEvent.change(inputElement, { target: { value: "Namaste, Duniya!" } });
    fireEvent.click(buttonElement);

    const newGreetingItem = screen.getByText(/namaste, duniya!/i);
    expect(newGreetingItem).toBeDefined();
  });
});
