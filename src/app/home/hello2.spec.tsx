import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import HelloWorld2 from './HelloWorld2'; // Ensure this import path is accurate based on the file structure

describe('HelloWorld2 Component', () => {
  beforeEach(() => {
    render(<HelloWorld2 />);
  });

  it('should display the initial message', () => {
    const initialMessageElement = screen.getByText(/Hello, World!/i);
    expect(initialMessageElement).toBeDefined();
  });

  it('should update the message when the button is clicked', () => {
    const buttonElement = screen.getByRole('button', { name: /click me/i });
    fireEvent.click(buttonElement);

    const updatedMessageElement = screen.getByText(/You clicked the button!/i);
    expect(updatedMessageElement).toBeDefined();
  });
});


This test file is for a React component named `HelloWorld2`. The tests check if the component renders with the initial message correctly and if the message updates as expected when the button is clicked. These tests follow clean code principles, making them clear and understandable. Each test case focuses on a single responsibility. The use of `beforeEach` for rendering the component avoids duplicate code, adhering to DRY (Don't Repeat Yourself) principles. The use of `toBeDefined` instead of `toBeInTheDocument` aligns with the specified guidelines for testing React components.