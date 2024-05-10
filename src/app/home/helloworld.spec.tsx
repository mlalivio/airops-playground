jsx
// HelloWorld.test.js
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import HelloWorld from './HelloWorld';

describe('HelloWorld', () => {
  let inputElement, buttonElement;

  beforeEach(() => {
    render(<HelloWorld />);
    inputElement = screen.getByPlaceholderText(/add new greeting/i);
    buttonElement = screen.getByRole('button', { name: /add greeting/i });
  });

  it('should render without crashing', () => {
    const helloWorldComponent = screen.getByText(/hello, world!/i);
    expect(helloWorldComponent).toBeDefined();
  });

  it('should add a new greeting when input is not empty and button is clicked', () => {
    // Adding a new greeting
    fireEvent.change(inputElement, { target: { value: 'Ciao, Mondo!' } });
    fireEvent.click(buttonElement);

    const newGreeting = screen.getByText(/ciao, mondo!/i);
    expect(newGreeting).toBeDefined();
  });

  it('should not add a blank greeting when input is empty and button is clicked', () => {
    // Try to add a blank greeting
    fireEvent.change(inputElement, { target: { value: '' } });
    fireEvent.click(buttonElement);

    const greetings = screen.getAllByRole('listitem');
    // Test assumes initial greetings are 3, as per component's default state
    expect(greetings).toHaveLength(3);
  });

  it('should clear input after a new greeting is added', () => {
    // Adding a new greeting and checking if the input clears
    fireEvent.change(inputElement, { target: { value: 'Hallo, Welt!' } });
    fireEvent.click(buttonElement);
    
    expect(inputElement.value).toBe('');
  });

  it('renders all default greetings', () => {
    const defaultGreetings = ["Hello, World!", "Hola, Mundo!", "Bonjour, le Monde!"];
    defaultGreetings.forEach(greetingText => {
      expect(screen.getByText(greetingText)).toBeDefined();
    });
  });
});
